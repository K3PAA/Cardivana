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
import { CreateLessonFormInput } from '@/lib/types'

interface VisibilitySelectProps {
  field: ControllerRenderProps<CreateLessonFormInput, 'visibility'>
  className?: string
  options?: { value: string; label: string }[]
}

const defaultOptions = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
]

export default function VisibilitySelect({
  field,
  className = '',
  options = defaultOptions,
}: VisibilitySelectProps) {
  return (
    <FormFieldWrapper label='Visibility' className={className}>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
        {...field}
      >
        <FormControl>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Visibility' />
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
