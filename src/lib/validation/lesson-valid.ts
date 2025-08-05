import z from 'zod'

export const createLessonInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tags: z.array(z.string()),
  price: z.string().min(1, 'Price is required'),
  visibility: z.enum(['public', 'private']),
})

export const createLessonOutputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tags: z.array(z.string()),
  price: z.coerce.number().positive('Price must be positive'),
  visibility: z.enum(['public', 'private']),
})
