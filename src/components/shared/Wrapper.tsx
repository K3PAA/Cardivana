import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode
  className?: string
}
export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={cn('mx-auto max-w-[1100px] px-6', className)}>
      {children}
    </div>
  )
}
