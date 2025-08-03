import z from 'zod'

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const registerFormSchema = loginFormSchema
  .extend({ repeatPassword: z.string() })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must be the equal',
    path: ['repeatPassword'],
  })
