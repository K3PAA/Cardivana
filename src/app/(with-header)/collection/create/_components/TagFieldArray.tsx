import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CreateLessonFormInput } from '@/lib/types'
import { PlusIcon, Trash } from 'lucide-react'
import React from 'react'
import { Control, UseFieldArrayReturn } from 'react-hook-form'

type TagFieldArrayProps = {
  control: Control<CreateLessonFormInput, any, CreateLessonFormInput>
  tagFieldArray: UseFieldArrayReturn<CreateLessonFormInput, 'tags', 'id'>
}

export default function TagFieldArray({
  control,
  tagFieldArray,
}: TagFieldArrayProps) {
  const { fields, remove, append } = tagFieldArray
  return (
    <section className='col-span-3 space-y-4'>
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
