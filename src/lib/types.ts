import z from 'zod'
import { flashcardFaceSchema } from './validation/flashcard'
import { registerFormSchema, loginFormSchema } from './validation/auth-valid'
import {
  createLessonInputSchema,
  createLessonOutputSchema,
} from './validation/lesson-valid'

export type RegisterForm = z.infer<typeof registerFormSchema>
export type LoginForm = z.infer<typeof loginFormSchema>

export type CreateLessonFormInput = z.infer<typeof createLessonInputSchema>
export type CreateLessonFormOutput = z.infer<typeof createLessonOutputSchema>

export type FlashcardFace = z.infer<typeof flashcardFaceSchema>
