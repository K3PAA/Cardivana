import z from 'zod'
import { flashcardFaceSchema } from './validation/flashcard'
import { registerFormSchema } from './validation/auth-valid'

export type FlashcardFace = z.infer<typeof flashcardFaceSchema>
export type RegisterForm = z.infer<typeof registerFormSchema>
