'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type GoBackButtonProps = {
  className?: string
}

export default function GoBackButton({ className }: GoBackButtonProps) {
  const router = useRouter()

  return (
    <Button
      type='button'
      onClick={() => router.back()}
      variant='outline'
      className={cn('', className)}
    >
      <ArrowLeft />
      Go back
    </Button>
  )
}
