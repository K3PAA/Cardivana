'use server'

import { auth } from '@/lib/auth'
import { actionClient } from '@/lib/safe-action'
import {
  loginFormSchema,
  registerFormSchema,
} from '@/lib/validation/auth-valid'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export const registerUserAction = actionClient
  .inputSchema(registerFormSchema)
  .action(async ({ parsedInput: { email, password, repeatPassword } }) => {
    if (password !== repeatPassword) {
      throw new Error('Passwords should be equal!')
    }

    await auth.api.signUpEmail({
      body: {
        name: email.split('@')[0] || 'user',
        email,
        password,
      },
    })

    revalidatePath('/profile')
    redirect('/profile')
  })

export const loginUserAction = actionClient
  .inputSchema(loginFormSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
      headers: await headers(),
    })

    revalidatePath('/', 'layout')
    redirect('/profile')
  })
