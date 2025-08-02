import z from 'zod'
import { flashcardFaceSchema } from './validation/flashcard'

export type FlashcardFace = z.infer<typeof flashcardFaceSchema>
