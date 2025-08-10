import z from 'zod'

export const flashcardFaceSchema = z.object({
  text: z.string().min(1, "Can't be empty"),
  example: z.string(),
  definition: z.string(),
  synonyms: z.array(
    z.object({
      text: z.string().min(1, 'Min 1 character').max(16, 'Max 25 characters.'),
    }),
  ),
  antonyms: z.array(
    z.object({
      text: z.string().min(1, 'Min 1 character').max(16, 'Max 25 characters.'),
    }),
  ),
})

export const flashcardSchema = z.object({
  front: flashcardFaceSchema,
  back: flashcardFaceSchema,
  difficulty: z.enum(['easy', 'normal', 'medium', 'hard', 'extreme']),
})

export const falshcardWithIdSchema = flashcardSchema.extend({
  id: z.string(),
})
