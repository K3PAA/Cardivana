import { getLesson } from '@/dal/lesson'
import ErrorPage from './_component/CustomError'
import FlashcardWrapper from './_component/FlashcardWrapper'
import { Suspense } from 'react'
import Wrapper from '@/components/shared/Wrapper'

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = await getLesson(slug)

  if (lesson.isError) return <ErrorPage message={lesson.message || ''} />

  const activeFlashcard = lesson.data!.flashcards[0]

  return (
    <Wrapper className='mt-0max-w-[990px]'>
      <p className='text-muted-foreground'>1 of 20 words</p>

      <Suspense fallback={<div>Loading...</div>}>
        <FlashcardWrapper flashcard={activeFlashcard} />
      </Suspense>
    </Wrapper>
  )
}
