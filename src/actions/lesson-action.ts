'use server'
import { verifyUser } from '@/dal/verify-user'
import { db } from '@/db'

import { flashcard } from '@/db/schema/flashcard'
import { lesson } from '@/db/schema/lesson'
import { actionClient } from '@/lib/safe-action'
import {
  createLessonSchema,
  deleteLessonSchema,
  editLessonWithLessonIdSchema,
} from '@/lib/validation/lesson-valid'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import slugify from 'slugify'

export const createLessonAction = actionClient
  .inputSchema(createLessonSchema)
  .action(async ({ parsedInput }) => {
    const session = await verifyUser()

    const lessonWithSameName = await db.query.lesson.findMany({
      where: (lesson, { eq }) => eq(lesson.title, parsedInput.title),
    })
    const slug = slugify(parsedInput.title + ' ' + lessonWithSameName.length)

    const [newLesson] = await db
      .insert(lesson)
      .values({
        ...parsedInput,
        price: parsedInput.price,
        userId: session.user.id,
        slug,
        tags: parsedInput.tags.map((value) => value.tag),
      })
      .returning()

    await Promise.all(
      parsedInput.flashcards.map(async (card) => {
        return db.insert(flashcard).values({
          userId: session.user.id,
          lessonId: newLesson.id,
          difficulty: card.difficulty,
          front: card.front,
          back: card.back,
        })
      }),
    )
    revalidatePath('/collection')
    redirect('/collection')
  })

export const editLessonAction = actionClient
  .inputSchema(editLessonWithLessonIdSchema)
  .action(async ({ parsedInput }) => {
    const { user } = await verifyUser()

    const lessonWithSameName = await db.query.lesson.findMany({
      where: (lesson, { eq }) => eq(lesson.title, parsedInput.title),
    })
    const slug = slugify(parsedInput.title + ' ' + lessonWithSameName.length)

    await db
      .update(lesson)
      .set({
        ...parsedInput,
        price: parsedInput.price,
        slug,
        tags: parsedInput.tags.map((value) => value.tag),
      })
      .where(eq(lesson.id, parsedInput.lessonId))

    await Promise.all(
      parsedInput.flashcards.map(async (card) => {
        const [exists] = await db
          .select()
          .from(flashcard)
          .where(eq(flashcard.id, card.id))
          .limit(1)
        if (exists) {
          return db
            .update(flashcard)
            .set({
              difficulty: card.difficulty,
              front: card.front,
              back: card.back,
            })
            .where(eq(flashcard.id, card.id))
        } else {
          return db.insert(flashcard).values({
            userId: user.id,
            lessonId: parsedInput.lessonId,
            difficulty: card.difficulty,
            front: card.front,
            back: card.back,
          })
        }
      }),
    )
    revalidatePath('/collection')
    redirect('/collection')
  })

export const removeLessonAction = actionClient
  .inputSchema(deleteLessonSchema)
  .action(async ({ parsedInput: { lessonId } }) => {
    const { user } = await verifyUser()

    if (!user) return { success: false }

    const lessonData = await db.query.lesson.findFirst({
      where: (lesson, { eq }) => eq(lesson.id, lessonId),
      columns: {
        id: true,
        userId: true,
      },
    })

    if (!lessonData) {
      return { success: false }
    }

    if (lessonData.userId !== user.id && user.role !== 'admin') {
      return { success: false }
    }

    await db.delete(lesson).where(eq(lesson.id, lessonId))

    revalidatePath('/collection')
    return { success: true }
  })
