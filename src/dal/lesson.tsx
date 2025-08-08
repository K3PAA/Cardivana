import 'server-only'
import { verifyUser } from './verify-user'
import { db } from '@/db'
import { sleep } from '@/lib/utils'

export const getUserLessons = async () => {
  const { user: activeUser } = await verifyUser()

  const lessons = await db.query.lesson.findMany({
    where: (lesson, { eq }) => eq(lesson.userId, activeUser.id),
    with: {
      flashcards: true,
    },
  })

  return lessons
}

export const getUserLessonInfo = async (lessonId: string) => {
  const { user: activeUser } = await verifyUser()

  const lesson = await db.query.lesson.findFirst({
    where: (lesson, { eq }) => eq(lesson.id, lessonId),
    with: {
      flashcards: true,
    },
  })

  if (!lesson) return { isSuccess: false, message: 'No lesson with this id' }

  if (activeUser.id !== lesson.userId)
    return { isSuccess: false, message: 'You can edit only your lesson' }

  return { isSuccess: true, data: lesson }
}
