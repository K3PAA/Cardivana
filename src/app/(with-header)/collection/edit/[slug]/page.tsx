import { getUserLessonInfo } from '@/dal/lesson'
import EditForm from '../../_components/form/EditForm'

export default async function EditLesson({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: lessonId } = await params
  const lessonData = await getUserLessonInfo(lessonId)

  if (!lessonData.isSuccess) return <h1>Something went wrong...</h1>

  const formData = lessonData.data
    ? {
        title: lessonData.data.title,
        description: lessonData.data.description,
        tags: lessonData.data.tags.map((tag) => ({ tag })),
        price: lessonData.data.price ?? '0',
        visibility: lessonData.data.visibility,
        flashcards: lessonData.data.flashcards
          .filter((card) => card.front && card.back)
          .map((card) => ({
            front: card.front!,
            back: card.back!,
            difficulty: card.difficulty,
            id: card.id,
          })),
      }
    : null

  console.log(lessonData.data)
  return (
    <main className='mb-8 pt-4'>
      <h1 className='mb-2 text-3xl font-bold'>
        Edit "{lessonData.data?.title}"
      </h1>
      {formData && <EditForm defaultValues={formData} lessonId={lessonId} />}
    </main>
  )
}
