import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode
  className?: string
}
export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={cn(
        'mx-auto mt-4 w-full max-w-[1110px] px-2 lg:px-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
