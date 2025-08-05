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

export default function CreateForm() {
  const { form, handleSubmit, isPending, fields, append, remove } =
    useCreateLessonForm()

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lesson Title</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lesson Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='What is your lesson about...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem>
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
              <FormDescription>
                To be able to change the price you have to be paid user.
              </FormDescription>
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
                    <SelectTrigger id={'t2342'}>
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
              <FormDescription>
                To be able to change the visibility you have to be paid user.
              </FormDescription>
            </FormItem>
          )}
        />

        <div className='space-y-4'>
          <FormLabel>Tags</FormLabel>
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`tags.${index}`}
              render={({ field }) => (
                <FormItem className='flex items-center gap-2'>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Enter tag'
                      className='uppercase'
                    />
                  </FormControl>
                  <Button
                    type='button'
                    variant='destructive'
                    size='sm'
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </FormItem>
              )}
            />
          ))}

          <Button
            type='button'
            variant='secondary'
            //@ts-ignore some bug ?
            onClick={() => append('')}
            className='w-full'
          >
            Add Tag
          </Button>
        </div>

        <Button type='submit' className='w-full' disabled={isPending}>
          <WithPending isPending={isPending}>Create lessons</WithPending>
        </Button>
      </form>
    </Form>
  )
}
