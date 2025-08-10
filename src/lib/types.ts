import z from 'zod'
import {
  falshcardSchema,
  flashcardFaceSchema,
} from './validation/flashcard-valid'
import { registerFormSchema, loginFormSchema } from './validation/auth-valid'
import { createLessonSchema } from './validation/lesson-valid'

export type RegisterForm = z.infer<typeof registerFormSchema>
export type LoginForm = z.infer<typeof loginFormSchema>

export type CreateLessonForm = z.infer<typeof createLessonSchema>

export type EditLessonForm = Omit<CreateLessonForm, 'flashcards'> & {
  flashcards: (CreateLessonForm['flashcards'][0] & { id: string })[]
}
export type FlashcardFace = z.infer<typeof flashcardFaceSchema>
export type Flashcard = z.infer<typeof falshcardSchema>
