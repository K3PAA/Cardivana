'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'
import React from 'react'

export default function TitleInput() {
  const search = useFilterCollectionStore((state) => state.search)
  const setSearch = useFilterCollectionStore((state) => state.setSearch)

  return (
    <div className='my-2 *:not-first:mt-2'>
      <Label htmlFor='search'>Search by title</Label>
      <Input
        id='search'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
