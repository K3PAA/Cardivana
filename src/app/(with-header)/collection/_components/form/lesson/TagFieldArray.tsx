import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CreateLessonForm, EditLessonForm } from '@/lib/types'
import { PlusIcon, Trash } from 'lucide-react'
import React from 'react'
import { Control, UseFieldArrayReturn } from 'react-hook-form'

type CreateTagFieldArrayProps = {
  control: Control<CreateLessonForm>
  tagFieldArray: UseFieldArrayReturn<CreateLessonForm, 'tags', 'id'>
}

export function CreateTagFieldArray({
  control,
  tagFieldArray,
}: CreateTagFieldArrayProps) {
  const { fields, remove, append } = tagFieldArray
  return (
    <section className='space-y-4 md:col-span-3'>
      <div className='grid grid-cols-[1fr_auto]'>
        <FormLabel>Lesson Tags</FormLabel>
        <Button
          type='button'
          variant='secondary'
          onClick={() => append({ tag: '' })}
          className='w-full'
        >
          <PlusIcon />
          Add Tag
        </Button>
      </div>

      <ul className='grid grid-cols-2 gap-4'>
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormField
              control={control}
              name={`tags.${index}.tag`}
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center gap-0'>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Enter tag'
                        className='rounded-r-none'
                      />
                    </FormControl>
                    <Button
                      type='button'
                      variant='destructive'
                      size='icon'
                      className='rounded-l-none'
                      onClick={() => remove(index)}
                    >
                      <Trash />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

type EditTagFieldArrayProps = {
  control: Control<EditLessonForm>
  tagFieldArray: UseFieldArrayReturn<EditLessonForm, 'tags', 'id'>
}

export function EditTagFieldArray({
  control,
  tagFieldArray,
}: EditTagFieldArrayProps) {
  const { fields, remove, append } = tagFieldArray
  return (
    <section className='space-y-4 md:col-span-3'>
      <div className='grid grid-cols-[1fr_auto]'>
        <FormLabel>Lesson Tags</FormLabel>
        <Button
          type='button'
          variant='secondary'
          onClick={() => append({ tag: '' })}
          className='w-full'
        >
          <PlusIcon />
          Add Tag
        </Button>
      </div>

      <ul className='grid grid-cols-2 gap-4'>
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormField
              control={control}
              name={`tags.${index}.tag`}
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center gap-0'>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Enter tag'
                        className='rounded-r-none'
                      />
                    </FormControl>
                    <Button
                      type='button'
                      variant='destructive'
                      size='icon'
                      className='rounded-l-none'
                      onClick={() => remove(index)}
                    >
                      <Trash />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
