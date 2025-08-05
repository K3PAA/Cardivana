'use server'
import { verifyUser } from '@/dal/require-user'
import { db } from '@/db'
import { lesson } from '@/db/schema/lesson'
import { actionClient } from '@/lib/safe-action'
import { createLessonOutputSchema } from '@/lib/validation/lesson-valid'
import slugify from 'slugify'

export const createLessonAction = actionClient
  .inputSchema(createLessonOutputSchema)
  .action(async ({ parsedInput }) => {
    const session = await verifyUser()

    const lessonWithSameName = await db.query.lesson.findMany({
      where: (lesson, { eq }) => eq(lesson.title, parsedInput.title),
    })
    const slug = slugify(parsedInput.title + ' ' + lessonWithSameName.length)

    await db.insert(lesson).values({
      ...parsedInput,
      userId: session.user.id,
      slug,
      tags: parsedInput.tags.map((value) => value.toUpperCase()),
    })
  })
