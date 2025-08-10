import z from 'zod'
import { flashcardSchema, falshcardWithIdSchema } from './flashcard-valid'

export const lessonSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tags: z.array(
    z.object({
      tag: z.string().min(1, 'Min 1 character').max(16, 'Max 16 characters.'),
    }),
  ),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, 'Invalid price format') // Validate decimal format
    .transform((val) => parseFloat(val)) // Convert to number for validation
    .refine((val) => val >= 0, 'Price must be non-negative')
    .transform((val) => val.toFixed(2)),
  visibility: z.enum(['public', 'private']),
})

export const createLessonSchema = lessonSchema.extend({
  flashcards: z.array(flashcardSchema),
})

export const editLessonSchema = lessonSchema.extend({
  flashcards: z.array(falshcardWithIdSchema),
})

export const editLessonWithLessonIdSchema = editLessonSchema.extend({
  lessonId: z.string(),
})

export const deleteLessonSchema = z.any()
