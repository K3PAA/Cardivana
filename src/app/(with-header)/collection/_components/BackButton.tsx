'use client'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button type='button' onClick={() => router.back()} variant='outline'>
      <ArrowLeft />
      Go back
    </Button>
  )
}
