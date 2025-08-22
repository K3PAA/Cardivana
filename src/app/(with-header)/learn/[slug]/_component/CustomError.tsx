import GoBackButton from '@/components/shared/GoBackButton'
import Wrapper from '@/components/shared/Wrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type CustomErrorProps = {
  message: string
}

export default function CustomError({ message }: CustomErrorProps) {
  return (
    <Wrapper className='mt-20'>
      <main className='flex flex-col items-center gap-3 text-center'>
        <h1 className='text-5xl font-bold'>
          Something went <span className='text-red-500 italic'>WRONG</span>
        </h1>
        <p className='text-muted-foreground max-w-[40ch] text-lg'>{message}</p>

        <div className='flex items-center justify-center gap-2'>
          <GoBackButton />
          <Button>
            <Link href='/'>Go Home</Link>
          </Button>
        </div>
      </main>
    </Wrapper>
  )
}
