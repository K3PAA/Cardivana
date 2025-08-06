import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useFieldArray, useForm } from 'react-hook-form'

import { CreateLessonFormInput } from '@/lib/types'
import { createLessonInputSchema } from '../validation/lesson-valid'
import { createLessonAction } from '@/actions/lesson-action'

const defaultValues: CreateLessonFormInput = {
  title: '',
  description: '',
  visibility: 'public',
  tags: [{ tag: 'book' }, { tag: 'B2' }],
  price: '0',
  flashcards: [
    {
      front: {
        text: 'Conceivable',
        definition: 'That you can imagine or believe',
        example: "It is conceivable that I'll see her tomorrow",
        synonyms: [{ text: 'Possible' }],
        antonyms: [{ text: 'Inconceivable' }],
      },
      back: {
        text: 'Wyobrażalny ',
        definition: '',
        example: '',
        synonyms: [{ text: 'Możliwy' }],
        antonyms: [{ text: 'Niewyobrażalny' }],
      },
      difficulty: 'medium',
    },
  ],
} as const

export const useCreateLessonForm = () => {
  const { execute, isPending } = useAction(createLessonAction)

  const form = useForm<CreateLessonFormInput>({
    resolver: zodResolver(createLessonInputSchema),
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

  async function onSubmit(values: CreateLessonFormInput) {
    execute({ ...values, price: parseFloat(values.price) || 0 })
  }

  return {
    form,
    tagFieldArray,
    flashcardFieldArray,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
