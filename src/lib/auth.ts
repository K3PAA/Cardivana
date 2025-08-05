import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'

import * as authSchema from '@/db/schema/auth'
import { nextCookies } from 'better-auth/next-js'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: authSchema, // only auth related
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true, // false, -> user will be created on register page but you won't be signed in automatically, we need to sign in on separate page
  },
  user: {
    additionalFields: {
      role: {
        type: ['user', 'pro-user', 'creator', 'admin'],
        input: false, // don't have to specify it when creating user
      },
    },
  },
  session: {
    expiresIn: 14 * 24 * 60 * 60, // 14 days
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  plugins: [nextCookies()],
})
