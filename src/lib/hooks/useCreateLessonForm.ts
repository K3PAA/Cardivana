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
  tags: [],
  price: '0',
  flashcards: [],
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
