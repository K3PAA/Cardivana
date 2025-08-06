import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import FormFieldWrapper from '../FormFieldWrapper'
import { ControllerRenderProps } from 'react-hook-form'
import { FormControl } from '@/components/ui/form'
import { CreateLessonFormInput } from '@/lib/types'

interface DifficultySelectProps {
  field: ControllerRenderProps<
    CreateLessonFormInput,
    `flashcards.${number}.difficulty`
  >
  className?: string
  options?: { value: string; label: string }[]
}

const defaultOptions = [
  { value: 'easy', label: 'Easy' },
  { value: 'normal', label: 'Normal' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
  { value: 'extreme', label: 'Extreme' },
]

export default function DifficultySelect({
  field,
  className = '',
  options = defaultOptions,
}: DifficultySelectProps) {
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
