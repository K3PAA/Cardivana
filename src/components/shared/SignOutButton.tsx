'use client'
import React, { useTransition } from 'react'
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'
import WithPending from './WithPending'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function SignOutButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleClick = async () => {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onError: (ctx) => {
            console.log(ctx.error.message)
            toast.error('Something went wrong!')
          },
          onSuccess: () => {
            toast.error('Successfully logged out!')
            router.push('/')
          },
        },
      })
    })
  }

  return (
    <Button onClick={handleClick} variant='destructive' disabled={isPending}>
      <WithPending isPending={isPending}>Sign Out</WithPending>
    </Button>
  )
}
