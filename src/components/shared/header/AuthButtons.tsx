'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { Button } from '../../ui/button'
import SignOutButton from '../SignOutButton'
import { cn } from '@/lib/utils'

type AuthButtonsProps = {
  className?: string
}

export default function AuthButtons({ className = '' }: AuthButtonsProps) {
  const { data, isPending } = authClient.useSession()

  if (isPending) return

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {data ? (
        <SignOutButton className='col-span-2' />
      ) : (
        <>
          <Button asChild>
            <Link href='/auth/login'>login</Link>
          </Button>
          <Button asChild variant='secondary'>
            <Link href='/auth/register'>register</Link>
          </Button>
        </>
      )}
    </div>
  )
}
