'use client'

import WithPending from '@/components/shared/WithPending'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCreateLessonForm } from '@/lib/hooks/useCreateLessonForm'

import FormFieldWrapper from './FormFieldWrapper'
import PriceInputWrapper from './lesson/PriceInputWrapper'
import VisibilitySelect from './lesson/VisibilitySelect'
import FlashcardFieldArray from './flashcard/FlashcardFieldArray'
import TagFieldArray from './lesson/TagFieldArray'
import { useRouter } from 'next/navigation'

export default function CreateForm() {
  const { form, handleSubmit, isPending, tagFieldArray, flashcardFieldArray } =
    useCreateLessonForm()

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className='grid gap-3 space-y-1 md:grid-cols-7 lg:gap-6'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormFieldWrapper label='Lesson Title' className='md:col-span-4'>
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
              <FormFieldWrapper label='Lesson Price' className='md:col-span-2'>
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
                className='self-start md:col-span-4'
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
            <WithPending isPending={isPending}>Create lessons</WithPending>
          </Button>
        </form>
      </Form>
    </>
  )
}
