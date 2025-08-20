import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { getUserLessons } from '@/dal/lesson'
import { PlusIcon, StarIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'
import RemoveLesson from './RemoveLesson'
import Link from 'next/link'

export default async function CollectionLessons() {
  const lessons = await getUserLessons()

  return (
    <>
      <Accordion
        type='single'
        collapsible
        className='border-border w-full border-b'
      >
        {lessons.map((lesson) => (
          <AccordionItem
            value={lesson.id}
            key={lesson.id}
            className='hover:bg-ring/5 border-border'
          >
            <AccordionPrimitive.Header className='flex'>
              <AccordionPrimitive.Trigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center gap-4 rounded-md p-4 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                <section className='flex w-full items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <p> {lesson.title}</p>
                    <p className='text-muted-foreground text-sm font-thin'>
                      {lesson.flashcards.length} cards in lesson.
                    </p>
                  </div>
                  <div>
                    {Number(lesson.price) === 0
                      ? 'free'
                      : `${lesson.price} EUR`}
                  </div>
                </section>

                <PlusIcon
                  size={16}
                  className='pointer-events-none shrink-0 opacity-60 transition-transform duration-200'
                  aria-hidden='true'
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className='mt-2 grid gap-2 ps-7 pe-4 pb-4'>
              <section className='grid grid-cols-[2fr_1fr] gap-4'>
                <div>
                  <p className='text-lg'>Descirption</p>
                  <p className='text-muted-foreground'>
                    {' '}
                    {lesson.description}{' '}
                  </p>
                </div>

                <div>
                  <p className='text-lg'>Tags</p>
                  <ul className='flex flex-wrap gap-2'>
                    {lesson.tags.map((tag, i) => {
                      return (
                        <li
                          key={`${tag}-${i}`}
                          className='bg-ring text-primary-foreground rounded-sm px-2 py-0.5'
                        >
                          {tag}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </section>
              <section>
                <h4 className='text-lg'>What words are inside this lesson ?</h4>
                <ul className='mb-2 flex flex-wrap gap-2'>
                  {lesson.flashcards.map((card, i) => {
                    if (!card.front?.text) return

                    return (
                      <li
                        key={`${card.front!.text}-${i}`}
                        className={cn('text-primary-foreground px-2 py-0.5', {
                          'bg-primary/85': i % 2 == 0,
                          'bg-primary/65': i % 2 == 1,
                        })}
                      >
                        {card.front.text}
                      </li>
                    )
                  })}
                </ul>
              </section>

              <section className='mt-4 flex justify-between gap-3'>
                <RemoveLesson lessonId={lesson.id} />

                <div className='flex gap-2'>
                  <Button variant='secondary' asChild>
                    <Link href={`/collection/edit/${lesson.id}`}>
                      Edit Lesson
                    </Link>
                  </Button>
                  <Button>Start Lesson</Button>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
