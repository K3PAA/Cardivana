import { getUserLessons } from '@/dal/lesson'
import StatCard from './StatCard'

import {
  BrickWallFire,
  ChevronsUp,
  Clipboard,
  Dock,
  BookCheck,
  Brain,
  AlarmClock,
} from 'lucide-react'

type StatsProps = {
  accountCreated: number
}

export default async function Stats({ accountCreated }: StatsProps) {
  const lessons = await getUserLessons()

  const totalFlashcards = lessons.reduce((acc, cur) => {
    return cur.flashcards.length + acc
  }, 0)

  return (
    <section className='my-4'>
      <h2 className='text-3xl font-bold'>My statistics </h2>
      <ul className='grid-auto'>
        <StatCard title='Longest learning streak:' value={20}>
          <BrickWallFire />
        </StatCard>
        <StatCard title='Current learning streak:' value={1}>
          <ChevronsUp />
        </StatCard>
        <StatCard title='Total lessons created:' value={lessons.length}>
          <Clipboard />
        </StatCard>
        <StatCard title='Total flashcards created:' value={totalFlashcards}>
          <Dock />
        </StatCard>
        <StatCard title='Total flashcards learned:' value={0}>
          <BookCheck />
        </StatCard>

        <StatCard title='Lessons taken:' value={20}>
          <Brain />
        </StatCard>

        <StatCard title='Account created ( days ago ): ' value={accountCreated}>
          <AlarmClock />
        </StatCard>
      </ul>
    </section>
  )
}
