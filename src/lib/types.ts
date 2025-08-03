import z from 'zod'
import { flashcardFaceSchema } from './validation/flashcard'
import { registerFormSchema, loginFormSchema } from './validation/auth-valid'

export type RegisterForm = z.infer<typeof registerFormSchema>
export type LoginForm = z.infer<typeof loginFormSchema>

export type FlashcardFace = z.infer<typeof flashcardFaceSchema>
