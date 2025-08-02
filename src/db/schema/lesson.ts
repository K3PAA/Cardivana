import { pgTable, pgEnum, primaryKey } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { timestamps } from '@/db/helper'
import { user } from '@/db/schema/auth'

export const visibilityEnum = pgEnum('visibility', ['public', 'private'])

export const lesson = pgTable('lesson', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  userId: t
    .text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  title: t.varchar('title', { length: 256 }).notNull(),
  description: t.text('description').notNull(),
  slug: t.varchar('slug', { length: 256 }).notNull().unique(),
  tags: t.varchar('tags', { length: 256 }).array().notNull().default([]),
  visibility: visibilityEnum('visibility').notNull().default('public'),
  price: t.integer('price').notNull().default(0),
  ...timestamps,
})

export const lessonReview = pgTable('lesson_review', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  lessonId: t
    .uuid('lesson_id')
    .notNull()
    .references(() => lesson.id, { onDelete: 'cascade' }),
  userId: t
    .text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  title: t.varchar('title', { length: 256 }).notNull(),
  description: t.text('description').notNull(),
  score: t.integer('score').notNull(),
  upvotes: t.integer('upvotes').notNull().default(0),
  ...timestamps,
})

export const userBookmarkLesson = pgTable(
  'user_bookmark_lesson',
  {
    userId: t
      .text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    lessonId: t
      .uuid('lesson_id')
      .notNull()
      .references(() => lesson.id, { onDelete: 'cascade' }),
    bookmarkedAt: t
      .timestamp('bookmarked_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.lessonId] }),
  }),
)

export const userFavoriteLesson = pgTable(
  'user_favorite_lesson',
  {
    userId: t
      .text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    lessonId: t
      .uuid('lesson_id')
      .notNull()
      .references(() => lesson.id, { onDelete: 'cascade' }),
    favoritedAt: t
      .timestamp('favorited_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.lessonId] }),
  }),
)
