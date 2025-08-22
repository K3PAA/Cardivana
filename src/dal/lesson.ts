import { db } from '@/db'
import 'server-only'
import { verifyUser } from './verify-user'

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

export const getTagsFromUserLessons = async () => {
  const { user: activeUser } = await verifyUser()

  const tagsArray = (
    await db.query.lesson.findMany({
      // Or check if user have in bookmarks this lesson
      where: (lesson, { eq }) => eq(lesson.userId, activeUser.id),
      columns: { tags: true },
    })
  )
    .map((tagsArr) => tagsArr.tags.join(' '))
    .join(' ')
    .toLowerCase()
    .split(' ')

  return [...new Set(tagsArray)]
}

export const getLesson = async (slug: string) => {
  const { user: activeUser } = await verifyUser()

  const lesson = await db.query.lesson.findFirst({
    where: (lesson, { eq }) => eq(lesson.slug, slug),
    columns: {},
    with: {
      flashcards: true,
    },
  })
  if (!lesson)
    return {
      isError: true,
      message: `No lesson with name ${slug}. Make sure that this lesson actually exists before trying to access it.`,
    }

  // check if have access to lesosn ( either is author or have in bookmarks )

  return { isError: false, data: lesson }
}
