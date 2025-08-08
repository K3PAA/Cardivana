import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Face from './FlashcardFace'
import { Control, useFormState } from 'react-hook-form'
import { CreateLessonFormInput } from '@/lib/types'
import { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FormField } from '@/components/ui/form'
import DifficultySelect from './DifficultySelect'
import { cn } from '@/lib/utils'

type FlashcardProps = {
  control: Control<CreateLessonFormInput, any, CreateLessonFormInput>
  index: number
  children: ReactNode
}

export default function Flashcard({
  control,
  index,
  children,
}: FlashcardProps) {
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
        <Face control={control} index={index} face='front' />
      </TabsContent>
      <TabsContent value='back'>
        <Face control={control} index={index} face='back' />
      </TabsContent>
      <TabsContent value='shared'>
        <Card>
          <CardContent>
            <FormField
              control={control}
              name={`flashcards.${index}.difficulty`}
              render={({ field }) => <DifficultySelect field={field} />}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='hide'></TabsContent>
    </Tabs>
  )
}
