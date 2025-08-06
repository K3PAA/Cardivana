'use client'

import WithPending from '@/components/shared/WithPending'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCreateLessonForm } from '@/lib/hooks/useCreateLessonForm'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PlusIcon, Trash } from 'lucide-react'

export default function CreateForm() {
  const { form, handleSubmit, isPending, fields, append, remove } =
    useCreateLessonForm()

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-7 gap-6 space-y-1'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='col-span-4'>
              <div className='flex justify-between'>
                <FormLabel>Lesson Title</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Lesson Price</FormLabel>

              <FormControl>
                <div className='relative'>
                  <Input
                    {...field}
                    className='peer ps-6 pe-12'
                    placeholder='0'
                    type='number'
                    step={0.01}
                    min={0}
                  />
                  <span className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50'>
                    €
                  </span>
                  <span className='text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50'>
                    EUR
                  </span>
                </div>
              </FormControl>

              <FormMessage />
              {/* <FormDescription>
                To be able to change the price you have to be paid user.
              </FormDescription> */}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='visibility'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visibility</FormLabel>

              <div className='*:not-first:mt-2'>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger id={'t2342'} className='w-full'>
                      <SelectValue placeholder='Select visibility' />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value='public'>Public</SelectItem>
                    <SelectItem value='private'>Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='col-span-3'>
              <div className='flex justify-between'>
                <FormLabel>Lesson Title</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Textarea
                  placeholder='What is your lesson about...'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className='col-span-4 space-y-4'>
          <div className='grid grid-cols-[1fr_auto]'>
            <FormLabel>Lesson Tags</FormLabel>
            <Button
              type='button'
              variant='secondary'
              //@ts-ignore some bug ?
              onClick={() => append('')}
              className='w-full'
            >
              <PlusIcon />
              Add Tag
            </Button>
          </div>

          <section className='grid grid-cols-3 gap-4'>
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`tags.${index}`}
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
            ))}
          </section>
        </div>

        <h2>Flashcards</h2>

        <Button type='submit' className='w-full' disabled={isPending}>
          <WithPending isPending={isPending}>Create lessons</WithPending>
        </Button>
      </form>
    </Form>
  )
}
