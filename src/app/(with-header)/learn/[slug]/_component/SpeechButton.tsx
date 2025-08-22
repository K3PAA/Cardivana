'use client'
import { Button } from '@/components/ui/button'
import { Speech } from 'lucide-react'

type SpeechButtonProps = {
  audio: string
}

export default function SpeechButton({ audio }: SpeechButtonProps) {
  const speech = new Audio(audio)

  return (
    <Button onClick={() => speech.play()}>
      <span className='sr-only'>speech</span>
      <Speech />
    </Button>
  )
}
