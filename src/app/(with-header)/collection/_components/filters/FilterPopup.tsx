import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { Funnel } from 'lucide-react'
import AuthorFilter from './AuthorFilter'
import FavoriteFilter from './FavoriteFilter'
import SortBySelect from './SortBySelect'
import TagsField from './TagsField'
import TitleInput from './TitleInput'

export default function FilterPopup() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='icon' variant='secondary' className='md:hidden'>
          <span className='sr-only'>Filter Button</span>
          <Funnel />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Filters and Sorting</AlertDialogTitle>
          <AlertDialogDescription>
            Filter your data so you can easier find what you are looking for.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <SortBySelect />
        <TitleInput />
        <AuthorFilter />
        <FavoriteFilter />
        <TagsField />

        <AlertDialogFooter className='ml-auto'>
          <AlertDialogAction>close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
