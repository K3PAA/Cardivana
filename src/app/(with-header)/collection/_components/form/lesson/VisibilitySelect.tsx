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
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
]

type CreateVisibilitySelectProps = {
  field: ControllerRenderProps<CreateLessonForm, 'visibility'>
  className?: string
  options?: { value: string; label: string }[]
}

export function CreateVisibilitySelect({
  field,
  className = '',
  options = defaultOptions,
}: CreateVisibilitySelectProps) {
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

type EditVisibilitySelectProps = {
  field: ControllerRenderProps<EditLessonForm, 'visibility'>
  className?: string
  options?: { value: string; label: string }[]
}

export function EditVisibilitySelect({
  field,
  className = '',
  options = defaultOptions,
}: EditVisibilitySelectProps) {
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
