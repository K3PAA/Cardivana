import z from 'zod'

export const registerFormSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must be the equal',
    path: ['repeatPassword'], // This will attach the error to the repeatPassword field
  })
