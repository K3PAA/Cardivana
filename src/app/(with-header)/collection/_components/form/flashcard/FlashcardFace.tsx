import { Card, CardContent } from '@/components/ui/card'
import { FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CreateLessonForm } from '@/lib/types'
import { Control } from 'react-hook-form'
import FormFieldWrapper from '../../../_components/form/FormFieldWrapper'

type FaceProps = {
  control: Control<CreateLessonForm, any, CreateLessonForm>
  face: 'front' | 'back'
  index: number
}

export default function FlashcardFace({ control, face, index }: FaceProps) {
  return (
    <Card>
      <CardContent className='grid gap-6'>
        <FormField
          control={control}
          name={`flashcards.${index}.${face}.text`}
          render={({ field }) => (
            <FormFieldWrapper label={`Flashcard ${face} title`}>
              <FormControl>
                <Input placeholder='Enter title' {...field} />
              </FormControl>
            </FormFieldWrapper>
          )}
        />

        <div className='grid gap-4 sm:grid-cols-2'>
          <FormField
            control={control}
            name={`flashcards.${index}.${face}.definition`}
            render={({ field }) => (
              <FormFieldWrapper label={`Flashcard ${face} definition`}>
                <FormControl>
                  <Textarea placeholder='Enter card definition' {...field} />
                </FormControl>
              </FormFieldWrapper>
            )}
          />

          <FormField
            control={control}
            name={`flashcards.${index}.${face}.example`}
            render={({ field }) => (
              <FormFieldWrapper label={`Flashcard ${face} example usage`}>
                <FormControl>
                  <Textarea placeholder='Enter example usage' {...field} />
                </FormControl>
              </FormFieldWrapper>
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}
