import { user } from './auth'
import {
  lesson,
  lessonReview,
  userBookmarkLesson,
  userFavoriteLesson,
} from './lesson'
import { flashcard, userEntry } from './flashcard'
import { relations } from 'drizzle-orm'

export const userRelations = relations(user, ({ many }) => ({
  lessons: many(lesson),
  flashcards: many(flashcard),
  entries: many(userEntry),
  bookmarks: many(userBookmarkLesson),
  favorites: many(userFavoriteLesson),
}))

export const userBookmarkLessonRelations = relations(
  userBookmarkLesson,
  ({ one }) => ({
    user: one(user, {
      fields: [userBookmarkLesson.userId],
      references: [user.id],
    }),
    lesson: one(lesson, {
      fields: [userBookmarkLesson.lessonId],
      references: [lesson.id],
    }),
  }),
)

export const userFavoriteLessonRelations = relations(
  userFavoriteLesson,
  ({ one }) => ({
    user: one(user, {
      fields: [userFavoriteLesson.userId],
      references: [user.id],
    }),
    lesson: one(lesson, {
      fields: [userFavoriteLesson.lessonId],
      references: [lesson.id],
    }),
  }),
)

export const userEntryRelations = relations(userEntry, ({ one }) => ({
  user: one(user, {
    fields: [userEntry.userId],
    references: [user.id],
  }),
}))

export const lessonRelations = relations(lesson, ({ one, many }) => ({
  author: one(user, {
    fields: [lesson.userId],
    references: [user.id],
  }),

  flashcards: many(flashcard),
  reviews: many(lessonReview),
}))

export const lessonReviewRelations = relations(lessonReview, ({ one }) => ({
  author: one(user, {
    fields: [lessonReview.userId],
    references: [user.id],
  }),
  lesson: one(lesson, {
    fields: [lessonReview.lessonId],
    references: [lesson.id],
  }),
}))

export const flashcardRelations = relations(flashcard, ({ one }) => ({
  author: one(user, {
    fields: [flashcard.userId],
    references: [user.id],
  }),
  lesson: one(lesson, {
    fields: [flashcard.lessonId],
    references: [lesson.id],
  }),
}))
