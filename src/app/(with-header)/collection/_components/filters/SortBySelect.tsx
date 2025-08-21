'use client'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { sortByOptions } from '@/lib/data'
import { SortByValues } from '@/lib/types'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'
import { useId } from 'react'

export default function SortBySelect() {
  const id = useId()

  const sortBy = useFilterCollectionStore((state) => state.sortBy)
  const setSortBy = useFilterCollectionStore((state) => state.setSortBy)

  return (
    <div className='*:not-first:mt-2'>
      <Label htmlFor={id}>Sort by</Label>
      <Select
        value={sortBy}
        onValueChange={(val) => setSortBy(val as SortByValues)}
      >
        <SelectTrigger className='w-full' id={id}>
          <SelectValue placeholder='Select sorting method' />
        </SelectTrigger>

        <SelectContent>
          {sortByOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
