import { CreateLessonFormInput } from '@/lib/types'
import { UseFieldArrayReturn } from 'react-hook-form'

type FlashcardFieldArrayProps = {
  flashcardFieldArray: UseFieldArrayReturn<
    CreateLessonFormInput,
    'flashcards',
    'id'
  >
}

export default function FlashcardFieldArray({
  flashcardFieldArray,
}: FlashcardFieldArrayProps) {
  return <div></div>
}
