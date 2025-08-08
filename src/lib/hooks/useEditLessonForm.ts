import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useFieldArray, useForm } from 'react-hook-form'

import { CreateLessonForm } from '@/lib/types'
import { editLessonSchema } from '../validation/lesson-valid'
import { editLessonAction } from '@/actions/lesson-action'

export const useEditLessonForm = (
  defaultValues: CreateLessonForm,
  lessonId: string,
) => {
  const { execute, isPending } = useAction(editLessonAction)

  const form = useForm<CreateLessonForm & { lessonId: string }>({
    resolver: zodResolver(editLessonSchema),
    defaultValues: { ...defaultValues, lessonId },
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
    execute({ ...values, lessonId })
  }

  return {
    form,
    tagFieldArray,
    flashcardFieldArray,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
