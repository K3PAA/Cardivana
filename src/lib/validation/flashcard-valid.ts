import z from 'zod'

export const flashcardFaceSchema = z.object({
  text: z.string().min(1),
  example: z.string(),
  definition: z.string(),
  synonyms: z.string().array(),
  antonyms: z.string().array(),
})

export const falshcardSchema = z.object({
  front: flashcardFaceSchema,
  back: flashcardFaceSchema,
  difficulty: z.enum(['easy', 'normal', 'medium', 'hard', 'extreme']),
})
