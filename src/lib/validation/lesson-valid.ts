import z from 'zod'
import { falshcardSchema } from './flashcard-valid'

export const createLessonInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tags: z.array(
    z.object({
      tag: z.string().min(1, 'Min 1 character').max(16, 'Max 16 characters.'),
    }),
  ),
  price: z.string().min(1, 'Price is required'),
  visibility: z.enum(['public', 'private']),
  flashcards: z.array(falshcardSchema),
})

export const createLessonOutputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tags: z.array(
    z.object({
      tag: z.string().min(1, 'Min 1 character').max(16, 'Max 16 characters.'),
    }),
  ),
  price: z.coerce.number().positive('Price must be positive'),
  visibility: z.enum(['public', 'private']),
  flashcards: z.array(falshcardSchema),
})
