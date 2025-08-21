import z from 'zod'
import {
  flashcardSchema,
  flashcardFaceSchema,
} from './validation/flashcard-valid'
import { registerFormSchema, loginFormSchema } from './validation/auth-valid'
import { createLessonSchema } from './validation/lesson-valid'
import { sortByOptions } from './data'
import { InferSelectModel } from 'drizzle-orm'
import { flashcard } from '@/db/schema/flashcard' // adjust path to your schema
import { lesson } from '@/db/schema/lesson' // adjust path to your schema

export type RegisterForm = z.infer<typeof registerFormSchema>
export type LoginForm = z.infer<typeof loginFormSchema>

export type CreateLessonForm = z.infer<typeof createLessonSchema>

export type EditLessonForm = Omit<CreateLessonForm, 'flashcards'> & {
  flashcards: (CreateLessonForm['flashcards'][0] & { id: string })[]
}
export type FlashcardFace = z.infer<typeof flashcardFaceSchema>

export type SortByValues = (typeof sortByOptions)[number]['value']

export type Lesson = InferSelectModel<typeof lesson>
export type Flashcard = InferSelectModel<typeof flashcard>

export type LessonWithFlashcards = Lesson & {
  flashcards: Flashcard[]
}
