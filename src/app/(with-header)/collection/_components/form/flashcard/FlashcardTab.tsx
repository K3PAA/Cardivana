import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CreateFlashcardFace, EditFlashcardFace } from './FlashcardFace'
import { Control, useFormState } from 'react-hook-form'
import { CreateLessonForm, EditLessonForm } from '@/lib/types'
import { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FormField } from '@/components/ui/form'
import {
  CreateDifficultySelect,
  EditDifficultySelect,
} from './DifficultySelect'
import { cn } from '@/lib/utils'

type CreateFlashcardTabProps = {
  control: Control<CreateLessonForm>
  index: number
  children: ReactNode
}

export function CreateFlashcardTab({
  control,
  index,
  children,
}: CreateFlashcardTabProps) {
  const { errors } = useFormState({ control })

  const flashcardErrosr = errors.flashcards?.[index]

  return (
    <Tabs
      defaultValue='front'
      className={cn('bg-card/80 border-border rounded-md border p-2', {
        'border-destructive': flashcardErrosr,
      })}
    >
      <div className='flex items-center justify-between'>
        <TabsList className='border-border border'>
          <TabsTrigger
            value='front'
            className={cn({
              'border-destructive': flashcardErrosr?.front,
            })}
          >
            Front
          </TabsTrigger>
          <TabsTrigger
            value='back'
            className={cn({
              'border-destructive': flashcardErrosr?.back,
            })}
          >
            Back
          </TabsTrigger>
          <TabsTrigger
            value='shared'
            className={cn({
              'border-destructive': flashcardErrosr?.difficulty,
            })}
          >
            Shared
          </TabsTrigger>
          <TabsTrigger value='hide'>Hide</TabsTrigger>
        </TabsList>

        {children}
      </div>

      <TabsContent value='front'>
        <CreateFlashcardFace control={control} index={index} face='front' />
      </TabsContent>
      <TabsContent value='back'>
        <CreateFlashcardFace control={control} index={index} face='back' />
      </TabsContent>
      <TabsContent value='shared'>
        <Card>
          <CardContent>
            <FormField
              control={control}
              name={`flashcards.${index}.difficulty`}
              render={({ field }) => <CreateDifficultySelect field={field} />}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='hide'></TabsContent>
    </Tabs>
  )
}

type EditFlashcardTabProps = {
  control: Control<EditLessonForm>
  index: number
  children: ReactNode
}

export function EditFlashcardTab({
  control,
  index,
  children,
}: EditFlashcardTabProps) {
  const { errors } = useFormState({ control })

  const flashcardErrosr = errors.flashcards?.[index]

  return (
    <Tabs
      defaultValue='front'
      className={cn('bg-card/80 border-border rounded-md border p-2', {
        'border-destructive': flashcardErrosr,
      })}
    >
      <div className='flex items-center justify-between'>
        <TabsList className='border-border border'>
          <TabsTrigger
            value='front'
            className={cn({
              'border-destructive': flashcardErrosr?.front,
            })}
          >
            Front
          </TabsTrigger>
          <TabsTrigger
            value='back'
            className={cn({
              'border-destructive': flashcardErrosr?.back,
            })}
          >
            Back
          </TabsTrigger>
          <TabsTrigger
            value='shared'
            className={cn({
              'border-destructive': flashcardErrosr?.difficulty,
            })}
          >
            Shared
          </TabsTrigger>
          <TabsTrigger value='hide'>Hide</TabsTrigger>
        </TabsList>

        {children}
      </div>

      <TabsContent value='front'>
        <EditFlashcardFace control={control} index={index} face='front' />
      </TabsContent>
      <TabsContent value='back'>
        <EditFlashcardFace control={control} index={index} face='back' />
      </TabsContent>
      <TabsContent value='shared'>
        <Card>
          <CardContent>
            <FormField
              control={control}
              name={`flashcards.${index}.difficulty`}
              render={({ field }) => <EditDifficultySelect field={field} />}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='hide'></TabsContent>
    </Tabs>
  )
}
