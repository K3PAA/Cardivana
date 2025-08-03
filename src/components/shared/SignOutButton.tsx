'use client'
import React, { useTransition } from 'react'
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'
import WithPending from './WithPending'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleClick = async () => {
    startTransition(async () => {
      await authClient.signOut()
      router.push('/')
    })
  }

  return (
    <Button onClick={handleClick} variant='destructive' disabled={isPending}>
      <WithPending isPending={isPending}>Sign Out</WithPending>
    </Button>
  )
}
