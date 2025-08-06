import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type FormFieldWrapperProps = {
  children: ReactNode
  label: string
  className?: string
  showError?: boolean
}

export default function FormFieldWrapper({
  children,
  label,
  showError = true,
  className = '',
}: FormFieldWrapperProps) {
  return (
    <FormItem className={cn(className)}>
      <div className='flex justify-between'>
        <FormLabel>{label}</FormLabel>
        {showError && <FormMessage />}
      </div>
      {children}
    </FormItem>
  )
}
