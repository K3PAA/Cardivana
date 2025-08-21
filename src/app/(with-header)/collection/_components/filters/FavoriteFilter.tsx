'use client'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'
import CheckboxFieldset from './CheckboxFieldset'
import { CheckedState } from '@radix-ui/react-checkbox'

export default function FavoriteFilter() {
  const favoritesOnly = useFilterCollectionStore((state) => state.favoriteOnly)
  const setFavorite = useFilterCollectionStore((state) => state.setFavoriteOnly)

  const handleValueChange = (checked: CheckedState, value: string) => {
    setFavorite(Boolean(checked))
  }

  return (
    <CheckboxFieldset
      label='Show favorite lessons only ?'
      items={[
        {
          label: 'favorite only',
          value: 'favorite',
          defaultChecked: favoritesOnly,
        },
      ]}
      onValueChange={handleValueChange}
    />
  )
}
