'use server'

import { verifyUser } from '@/dal/require-user'
import { actionClient } from '@/lib/safe-action'
import {
  registerFormSchema,
  loginFormSchema,
} from '@/lib/validation/auth-valid'

import { auth } from '@/lib/auth'

export const registerUserAction = actionClient
  .inputSchema(registerFormSchema)
  .action(async ({ parsedInput: { email, password, repeatPassword } }) => {
    if (password !== repeatPassword) {
      return { isError: true, message: 'Passwords must match' }
    }
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email.split('@')[0] || 'test',
        callbackURL: 'https://example.com/callback',
      },
    })
  })

export const loginUserAction = actionClient
  .inputSchema(loginFormSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const user = await verifyUser()

    return user
  })
