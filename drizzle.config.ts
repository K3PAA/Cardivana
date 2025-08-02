import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' })

export default defineConfig({
  dialect: 'postgresql',
  schema: [
    './src/db/schema/auth.ts',
    './src/db/schema/lesson.ts',
    './src/db/schema/flashcard.ts',
  ],
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
})
