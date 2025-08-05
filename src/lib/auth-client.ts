import { createAuthClient } from 'better-auth/react'

import { inferAdditionalFields } from 'better-auth/client/plugins'
import type { auth } from '@/lib/auth'

import { env } from './env'
export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API_URL,
  plugins: [inferAdditionalFields<typeof auth>()],
  storage: 'localStorage',
  session: {
    cookieCache: true,
    freshTokenThreshold: 5 * 60 * 1000,
  },
})
