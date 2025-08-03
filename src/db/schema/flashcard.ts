import { pgTable } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { timestamps } from '@/db/helper'
import { FlashcardFace } from '@/lib/types'
import { lesson } from './lesson'
import { user } from '@/db/schema/auth'

export const flashcard = pgTable('flashcard', {
  id: t.uuid().defaultRandom().primaryKey(),
  userId: t
    .uuid('user_id')
    .notNull()
    .references(() => user.id),
  lessonId: t.uuid('lesson_id').references(() => lesson.id),

  front: t.jsonb().$type<FlashcardFace>(),
  back: t.jsonb().$type<FlashcardFace>(),

  ...timestamps,
})
