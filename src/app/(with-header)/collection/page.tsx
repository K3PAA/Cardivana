import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

import { Suspense } from 'react'

import Link from 'next/link'

import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarSidepanel from '@/components/sidebar/SidebarSidepanel'
import SidebarWrapper from '@/components/sidebar/SidebarWrapper'
import AuthorFilter from './_components/filters/AuthorFilter'
import FavoriteFilter from './_components/filters/FavoriteFilter'
import FilterPopup from './_components/filters/FilterPopup'
import SortBySelect from './_components/filters/SortBySelect'
import TagsField from './_components/filters/TagsField'
import TitleInput from './_components/filters/TitleInput'
import GetCollectionLessons from './_components/GetCollectionLessons'

export default function page() {
  return (
    <SidebarWrapper>
      <SidebarContent>
        <div className='border-border sm:h-sidebar-header flex items-center justify-between gap-2 border-b px-2 py-2 sm:flex-row sm:py-0'>
          <h1 className='text-xl sm:text-3xl'>Collection of lessons</h1>

          <div className='flex items-center justify-center gap-2'>
            <Button asChild>
              <Link href='/collection/create'>
                <PlusIcon />
                <span className='hidden sm:inline'>Create new </span> lesson
              </Link>
            </Button>
            <FilterPopup />
          </div>
        </div>

        <ul>
          <Suspense fallback={<div>Loading...</div>}>
            <GetCollectionLessons />
          </Suspense>
        </ul>
      </SidebarContent>

      <SidebarSidepanel>
        <h2 className='my-2'>Filters and Sorting</h2>

        <SortBySelect />
        <TitleInput />
        <AuthorFilter />
        <FavoriteFilter />
        <TagsField />
      </SidebarSidepanel>
    </SidebarWrapper>
  )
}
