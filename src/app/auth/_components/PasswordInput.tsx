'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useId, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'

type PasswordInputProps = {
  field:
    | ControllerRenderProps<
        {
          email: string
          password: string
          repeatPassword: string
        },
        'password' | 'repeatPassword'
      >
    | ControllerRenderProps<{ email: string; password: string }, 'password'>
}

export default function PasswordInput({ field }: PasswordInputProps) {
  const id = useId()

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)

  return (
    <div className='relative'>
      <Input
        id={id}
        type={isVisible ? 'text' : 'password'}
        placeholder='password123'
        className='pe-9'
        {...field}
      />
      <Button
        className='text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
        type='button'
        onClick={toggleVisibility}
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        aria-pressed={isVisible}
        aria-controls='password'
        variant='ghost'
        size='icon'
      >
        {isVisible ? (
          <EyeOffIcon size={16} aria-hidden='true' />
        ) : (
          <EyeIcon size={16} aria-hidden='true' />
        )}
      </Button>
    </div>
  )
}
