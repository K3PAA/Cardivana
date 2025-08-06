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
