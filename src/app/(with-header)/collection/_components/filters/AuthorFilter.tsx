'use client'
import { CheckedState } from '@radix-ui/react-checkbox'
import CheckboxFieldset from './CheckboxFieldset'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'

export default function AuthorFilter() {
  const setCreatedBy = useFilterCollectionStore((state) => state.setCreatedBy)
  const handleValueChange = (checked: CheckedState, value: string) => {
    setCreatedBy(checked, value)
  }

  return (
    <CheckboxFieldset
      label='Lesson created by ?'
      items={[
        { label: 'by me', value: 'me' },
        { label: 'by other people', value: 'other' },
      ]}
      onValueChange={handleValueChange}
    />
  )
}
