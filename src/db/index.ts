import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'

import * as authSchema from '@/db/schema/auth'
import * as flashcardSchema from '@/db/schema/flashcard'
import * as lessonSchema from '@/db/schema/lesson'

config({ path: '.env.local' })

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle({
  client: sql,
  casing: 'snake_case',
  schema: { ...authSchema, ...flashcardSchema, ...lessonSchema },
})
