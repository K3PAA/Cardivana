import Logo from '@/components/shared/Logo'
import Wrapper from '@/components/shared/Wrapper'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper className='relative mt-12 grid place-content-center'>
      <div className='flex justify-between'>
        <Logo className='mb-12 text-center' />

        <Button variant='secondary' asChild>
          <Link href='/'>
            <ArrowLeft />
            Home
          </Link>
        </Button>
      </div>
      {children}

      <div className='text-muted-foreground mt-4 text-center text-sm text-balance'>
        By clicking continue you agree to{' '}
        <span className='hover:text-primary hover:underline'>
          Terms of service
        </span>{' '}
        and{' '}
        <span className='hover:text-primary hover:underline'>
          Privacy Policy
        </span>
      </div>
    </Wrapper>
  )
}
