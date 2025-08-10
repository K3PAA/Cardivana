'use client'

import WithPending from '@/components/shared/WithPending'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useEditLessonForm } from '@/lib/hooks/useEditLessonForm'

import FlashcardFieldArray from './flashcard/FlashcardFieldArray'
import FormFieldWrapper from './FormFieldWrapper'
import PriceInputWrapper from './lesson/PriceInputWrapper'
import TagFieldArray from './lesson/TagFieldArray'
import VisibilitySelect from './lesson/VisibilitySelect'
import { EditLessonForm } from '@/lib/types'

type EditFormProps = {
  defaultValues: EditLessonForm
  lessonId: string
}

export default function EditForm({ defaultValues, lessonId }: EditFormProps) {
  const { form, handleSubmit, isPending, tagFieldArray, flashcardFieldArray } =
    useEditLessonForm(defaultValues, lessonId)

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-7 gap-3 space-y-1 lg:gap-6'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormFieldWrapper label='Lesson Title' className='col-span-4'>
              <FormControl>
                <Input placeholder='Enter lesson title' {...field} />
              </FormControl>
            </FormFieldWrapper>
          )}
        />

        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormFieldWrapper label='Lesson Price' className='col-span-2'>
              <FormControl>
                <PriceInputWrapper>
                  <Input
                    {...field}
                    className='peer ps-6 pe-12'
                    type='number'
                    step={0.01}
                    min={0}
                  />
                </PriceInputWrapper>
              </FormControl>
            </FormFieldWrapper>
          )}
        />

        <FormField
          control={form.control}
          name='visibility'
          render={({ field }) => <VisibilitySelect field={field} />}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormFieldWrapper
              label='Lesson Description'
              className='col-span-4 self-start'
            >
              <FormControl>
                <Textarea
                  placeholder='What is your lesson about...'
                  {...field}
                />
              </FormControl>
            </FormFieldWrapper>
          )}
        />

        <TagFieldArray tagFieldArray={tagFieldArray} control={form.control} />

        <FlashcardFieldArray
          flashcardFieldArray={flashcardFieldArray}
          control={form.control}
        />

        <Button type='submit' className='w-full' disabled={isPending}>
          <WithPending isPending={isPending}>Edit lesson</WithPending>
        </Button>
      </form>
    </Form>
  )
}
