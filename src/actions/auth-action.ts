'use server'

import { verifyUser } from '@/dal/require-user'
import { actionClient } from '@/lib/safe-action'
import { registerFormSchema } from '@/lib/validation/auth-valid'

export const registerUser = actionClient
  .inputSchema(registerFormSchema)
  .action(async ({ parsedInput: { email, password, repeatPassword } }) => {
    const user = await verifyUser()
    return user
  })
