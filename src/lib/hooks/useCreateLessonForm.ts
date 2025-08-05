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
  tags: ['test'],
  price: '0',
} as const

export const useCreateLessonForm = () => {
  const { execute, isPending } = useAction(createLessonAction)

  const form = useForm<CreateLessonFormInput>({
    resolver: zodResolver(createLessonInputSchema),
    defaultValues,
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    // @ts-ignore, some bug ?
    name: 'tags',
  })

  async function onSubmit(values: CreateLessonFormInput) {
    execute({ ...values, price: parseFloat(values.price) || 0 })
  }

  return {
    form,
    fields,
    append,
    remove,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
