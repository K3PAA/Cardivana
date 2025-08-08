import { Card, CardContent } from '@/components/ui/card'
import { FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CreateLessonFormInput } from '@/lib/types'
import { Control, useFieldArray } from 'react-hook-form'
import FormFieldWrapper from '../../../_components/form/FormFieldWrapper'

type FaceProps = {
  control: Control<CreateLessonFormInput, any, CreateLessonFormInput>
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

        <div className='grid grid-cols-2 gap-4'>
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
