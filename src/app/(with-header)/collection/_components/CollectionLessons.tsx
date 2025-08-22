'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import RemoveLesson from './RemoveLesson'
import { LessonWithFlashcards } from '@/lib/types'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'

type CollectionLessonsProps = {
  lessons: LessonWithFlashcards[]
}

export default function CollectionLessons({ lessons }: CollectionLessonsProps) {
  const search = useFilterCollectionStore((state) => state.search)
  const tags = useFilterCollectionStore((state) => state.tags)
  const sortingMethod = useFilterCollectionStore((state) => state.sortBy)

  const filteredAndSortedLessons = lessons
    .slice()
    .filter((lesson) => {
      const searchCorrect = lesson.title
        .toLowerCase()
        .startsWith(search.toLowerCase())
      const tagsCorrect =
        tags.length === 0 || tags.every((tag) => lesson.tags.includes(tag))

      return searchCorrect && tagsCorrect
    })
    .sort((a, b) => {
      if (sortingMethod === 'AZ') {
        return a.title.localeCompare(b.title)
      }

      if (sortingMethod === 'ZA') {
        return b.title.localeCompare(a.title)
      }

      if (sortingMethod === 'MOST_FLASHCARDS') {
        return b.flashcards.length - a.flashcards.length
      }

      return a.createdAt.getTime() - b.createdAt.getTime()
    })

  return (
    <>
      {filteredAndSortedLessons.length === 0 && lessons.length > 0 && (
        <section className='p-8'>
          <h2 className='text-center text-3xl'>
            Modify your filters, no lesson matches your requirements
          </h2>
        </section>
      )}
      <p>{tags}</p>
      <Accordion
        type='single'
        collapsible
        className='border-border w-full border-b'
      >
        {filteredAndSortedLessons.map((lesson) => (
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
              <section className='grid gap-4 sm:grid-cols-[2fr_1fr]'>
                <div>
                  <p className='text-lg'>Descirption</p>
                  <p className='text-muted-foreground'>
                    {' '}
                    {lesson.description}{' '}
                  </p>
                </div>

                <div>
                  <p className='text-lg'>Visibility</p>
                  <p className='text-muted-foreground'>{lesson.visibility} </p>
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

              <section className='mt-4 flex flex-wrap justify-between gap-3'>
                <div className='flex gap-2'>
                  <RemoveLesson lessonId={lesson.id} />
                  <Button variant='secondary' asChild className='capitalize'>
                    <Link href={`/print/${lesson.id}`}>print</Link>
                  </Button>
                </div>

                <div className='flex gap-2'>
                  <Button variant='secondary' asChild>
                    <Link href={`/collection/edit/${lesson.id}`}>Edit</Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/learn/${lesson.slug}`}>Start Lesson</Link>
                  </Button>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
