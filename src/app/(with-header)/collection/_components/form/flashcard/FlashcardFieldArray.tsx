import { Button } from '@/components/ui/button'
import { CreateLessonForm, EditLessonForm } from '@/lib/types'
import { PlusIcon, Trash } from 'lucide-react'
import { Control, UseFieldArrayReturn } from 'react-hook-form'
import FlashcardTab from './FlashcardTab'

type FlashcardFieldArrayProps =
  | {
      control: Control<CreateLessonForm, any, CreateLessonForm>
      flashcardFieldArray: UseFieldArrayReturn<
        CreateLessonForm,
        'flashcards',
        'id'
      >
    }
  | {
      control: Control<EditLessonForm, any, EditLessonForm>
      flashcardFieldArray: UseFieldArrayReturn<
        EditLessonForm,
        'flashcards',
        'id'
      >
    }

const defaultFaceValues = {
  text: '',
  definition: '',
  example: '',
  synonyms: [],
  antonyms: [],
}

export default function FlashcardFieldArray({
  control,
  flashcardFieldArray,
}: FlashcardFieldArrayProps) {
  const { fields, remove, append } = flashcardFieldArray

  return (
    <section className='md:col-span-full'>
      <div className='grid grid-cols-[1fr_auto]'>
        <h2 className='text-3xl'>Create Flashcards</h2>
        <Button
          type='button'
          variant='secondary'
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              difficulty: 'hard',
              back: defaultFaceValues,
              front: defaultFaceValues,
            })
          }
          className='w-full'
        >
          <PlusIcon />
          Create Flashcard
        </Button>
      </div>

      <ul className='mt-4 grid gap-4'>
        {fields.map((field, index) => (
          <li key={field.id}>
            <FlashcardTab control={control} index={index}>
              <Button
                type='button'
                variant='destructive'
                size='icon'
                onClick={() => remove(index)}
              >
                <Trash />
              </Button>
            </FlashcardTab>
          </li>
        ))}
      </ul>
      <Button
        type='button'
        variant='secondary'
        onClick={() =>
          append({
            id: crypto.randomUUID(),
            difficulty: 'hard',
            back: defaultFaceValues,
            front: defaultFaceValues,
          })
        }
        className='mt-4 w-full'
      >
        <PlusIcon />
        Create Flashcard
      </Button>
    </section>
  )
}
