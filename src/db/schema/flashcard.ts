import { pgTable, pgEnum } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { timestamps } from '@/db/helper'
import { FlashcardFace } from '@/lib/types'
import { lesson } from './lesson'
import { user } from '@/db/schema/auth'
import { timeStamp } from 'console'

export const entryStatusEnum = pgEnum('status', ['success', 'fail'])

export const difficultyEnum = pgEnum('difficulty', [
  'easy',
  'normal',
  'medium',
  'hard',
  'extreme',
])

export const flashcard = pgTable('flashcard', {
  id: t.uuid().defaultRandom().primaryKey(),
  userId: t
    .uuid('user_id')
    .notNull()
    .references(() => user.id),
  lessonId: t.uuid('lesson_id').references(() => lesson.id),

  front: t.jsonb().$type<FlashcardFace>(),
  back: t.jsonb().$type<FlashcardFace>(),
  difficulty: difficultyEnum().notNull().default('medium'),

  ...timestamps,
})

export const userEntry = pgTable('user_entry', {
  id: t.uuid().defaultRandom().primaryKey(),
  userId: t
    .uuid('user_id')
    .notNull()
    .references(() => user.id),
  lessonId: t.uuid('lesson_id').references(() => lesson.id),
  flashcardId: t.uuid('flashcard_id').references(() => flashcard.id),
  status: entryStatusEnum().notNull(),

  ...timeStamp,
})
