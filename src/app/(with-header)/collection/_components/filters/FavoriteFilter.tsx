'use client'
import { useFilterCollectionStore } from '@/stores/filter-collection-store'
import { CheckedState } from '@radix-ui/react-checkbox'
import CheckboxFieldset from './CheckboxFieldset'

export default function FavoriteFilter() {
  const favoritesOnly = useFilterCollectionStore((state) => state.favoriteOnly)
  const setFavorite = useFilterCollectionStore((state) => state.setFavoriteOnly)

  const handleValueChange = (checked: CheckedState) => {
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
