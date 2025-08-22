import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useFieldArray, useForm } from 'react-hook-form'

import { CreateLessonForm } from '@/lib/types'
import { createLessonSchema } from '../validation/lesson-valid'
import { createLessonAction } from '@/actions/lesson-action'

const defaultValues: CreateLessonForm = {
  title: '',
  description: '',
  visibility: 'public',
  tags: [{ tag: 'book' }, { tag: 'B2' }],
  price: '0',
  flashcards: [
    {
      front: {
        text: 'Conceivable',
        definition: '',
        example: '',
        synonyms: [],
        antonyms: [],
      },
      back: {
        text: 'Wyobrażalny ',
        definition: '',
        example: '',
        synonyms: [],
        antonyms: [],
      },
      difficulty: 'medium',
    },
  ],
} as const

export const useCreateLessonForm = () => {
  const { execute, isPending } = useAction(createLessonAction)

  const form = useForm<CreateLessonForm>({
    resolver: zodResolver(createLessonSchema),
    defaultValues,
  })

  const tagFieldArray = useFieldArray({
    control: form.control,
    name: 'tags',
  })

  const flashcardFieldArray = useFieldArray({
    control: form.control,
    name: 'flashcards',
  })

  async function onSubmit(values: CreateLessonForm) {
    execute({ ...values })
  }

  return {
    form,
    tagFieldArray,
    flashcardFieldArray,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
