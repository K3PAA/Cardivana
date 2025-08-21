import { SortByValues } from '@/lib/types'
import { CheckedState } from '@radix-ui/react-checkbox'
import { create } from 'zustand'

type FilterCollection = {
  sortBy: SortByValues
  search: string
  createdBy: string[]
  favoriteOnly: boolean
  tags: string[]
}

type FilterCollectionStore = FilterCollection & {
  setSearch: (value: string) => void
  setSortBy: (value: SortByValues) => void
  setFavoriteOnly: (value: boolean) => void
  setTags: (checked: CheckedState, value: string) => void
  setCreatedBy: (checked: CheckedState, value: string) => void
}

export const useFilterCollectionStore = create<FilterCollectionStore>(
  (set) => ({
    sortBy: 'RECENT',
    search: '',
    favoriteOnly: false,
    createdBy: [],
    tags: [],

    setSearch: (value: string) => {
      set({ search: value })
    },

    setSortBy: (value: SortByValues) => {
      set({ sortBy: value })
    },

    setFavoriteOnly: (value: boolean) => {
      set({ favoriteOnly: value })
    },
    setTags: (checked: CheckedState, value: string) => {
      set((state) => ({
        tags: checked
          ? [...state.tags, value]
          : state.tags.filter((tag: string) => tag !== value),
      }))
    },
    setCreatedBy: (checked: CheckedState, value: string) => {
      set((state: FilterCollection) => ({
        createdBy: checked
          ? [...state.createdBy, value]
          : state.createdBy.filter((tag: string) => tag !== value),
      }))
    },
  }),
)
