import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import FormFieldWrapper from '../../../_components/form/FormFieldWrapper'
import { ControllerRenderProps } from 'react-hook-form'
import { FormControl } from '@/components/ui/form'
import { CreateLessonForm, EditLessonForm } from '@/lib/types'

const defaultOptions = [
  { value: 'easy', label: 'Easy' },
  { value: 'normal', label: 'Normal' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
  { value: 'extreme', label: 'Extreme' },
]

type CreateDifficultySelectProps = {
  field: ControllerRenderProps<
    CreateLessonForm,
    `flashcards.${number}.difficulty`
  >
  className?: string
  options?: { value: string; label: string }[]
}

export function CreateDifficultySelect({
  field,
  className = '',
  options = defaultOptions,
}: CreateDifficultySelectProps) {
  return (
    <FormFieldWrapper label='Difficulty' className={className}>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
        {...field}
      >
        <FormControl>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='difficulty' />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormFieldWrapper>
  )
}

type EditDifficultySelectProps = {
  field: ControllerRenderProps<
    EditLessonForm,
    `flashcards.${number}.difficulty`
  >
  className?: string
  options?: { value: string; label: string }[]
}

export function EditDifficultySelect({
  field,
  className = '',
  options = defaultOptions,
}: EditDifficultySelectProps) {
  return (
    <FormFieldWrapper label='Difficulty' className={className}>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
        {...field}
      >
        <FormControl>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='difficulty' />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormFieldWrapper>
  )
}
