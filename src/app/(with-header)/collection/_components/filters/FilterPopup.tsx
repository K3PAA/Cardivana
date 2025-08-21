import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Funnel } from 'lucide-react'
import SortBySelect from './SortBySelect'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CheckboxFieldset from './CheckboxFieldset'
import TagsField from './TagsField'

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

          <SortBySelect />

          <div className='my-2 *:not-first:mt-2'>
            <Label htmlFor='search'>Simple input</Label>
            <Input id='search' placeholder='Search...' />
          </div>

          <CheckboxFieldset
            label='Lesson created by ?'
            items={[
              { label: 'by me', value: 'me' },
              { label: 'by other people', value: 'other' },
            ]}
          />

          <CheckboxFieldset
            label='Show favorite lessons only ?'
            items={[{ label: 'favorite only', value: 'favorite' }]}
          />

          <TagsField />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Apply filters</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
