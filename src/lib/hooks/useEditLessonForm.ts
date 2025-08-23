import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useFieldArray, useForm } from 'react-hook-form'

import { editLessonAction } from '@/actions/lesson-action'
import { EditLessonForm } from '@/lib/types'
import { editLessonSchema } from '../validation/lesson-valid'

export const useEditLessonForm = (
  defaultValues: EditLessonForm,
  lessonId: string,
) => {
  const { execute, isPending } = useAction(editLessonAction)

  const form = useForm<EditLessonForm>({
    resolver: zodResolver(editLessonSchema),
    defaultValues: { ...defaultValues },
  })

  const tagFieldArray = useFieldArray({
    control: form.control,
    name: 'tags',
  })

  const flashcardFieldArray = useFieldArray({
    control: form.control,
    name: 'flashcards',
  })

  async function onSubmit(values: EditLessonForm) {
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
