import { ReactNode } from 'react'

type PriceInputWrapperProps = {
  children: ReactNode
}

export default function PriceInputWrapper({
  children,
}: PriceInputWrapperProps) {
  return (
    <div className='relative'>
      {children}
      <span className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50'>
        €
      </span>
      <span className='text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50'>
        EUR
      </span>
    </div>
  )
}
