'use client'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'
import { CheckedState } from '@radix-ui/react-checkbox'
import CheckboxFieldset from './CheckboxFieldset'

type TagsFieldDataProps = {
  items: {
    value: string
    label: string
  }[]
}

export default function TagsFieldData({ items }: TagsFieldDataProps) {
  const setTags = useFilterCollectionStore((state) => state.setTags)
  const handleValueChange = (checked: CheckedState, value: string) => {
    setTags(checked, value)
  }

  return (
    <CheckboxFieldset
      label='Select relevant tags ?'
      items={items}
      onValueChange={handleValueChange}
    />
  )
}
