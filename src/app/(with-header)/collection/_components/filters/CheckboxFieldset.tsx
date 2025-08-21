'use client'
import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'

type Item = {
  value: string
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

type CheckboxFieldsetProps = {
  items: Item[]
  label: string
  onValueChange: (checked: CheckedState, value: string) => void
}

export default function CheckboxFieldset({
  label,
  items,
  onValueChange,
}: CheckboxFieldsetProps) {
  const id = useId()

  return (
    <fieldset className='mt-4 space-y-2'>
      <legend className='text-foreground text-sm leading-none font-medium capitalize'>
        {label}
      </legend>

      <div className='flex flex-wrap gap-1.5'>
        {items.map((item) => (
          <label
            key={`${id}-${item.value}`}
            className='border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border p-2 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50'
          >
            <Checkbox
              id={`${id}-${item.value}`}
              value={item.value}
              className='sr-only after:absolute after:inset-0'
              onCheckedChange={(e) => {
                onValueChange(e, item.value)
              }}
              checked={item.defaultChecked}
              disabled={item.disabled}
            />
            <span
              aria-hidden='true'
              className='pointer-events-none text-sm font-medium'
            >
              {item.label}
            </span>
            <span className='sr-only'>{item.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
