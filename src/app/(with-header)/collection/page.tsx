import { Button } from '@/components/ui/button'
import { Funnel, PlusIcon } from 'lucide-react'

import { Suspense, useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import CollectionLessons from './_components/CollectionLessons'

import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarSidepanel from '@/components/sidebar/SidebarSidepanel'
import SidebarWrapper from '@/components/sidebar/SidebarWrapper'

const items = [
  { value: '1', label: 'Me', defaultChecked: true },
  { value: '2', label: 'Other', defaultChecked: true },
]

export default function page() {
  const id = useId()

  return (
    <SidebarWrapper>
      <SidebarContent>
        <div className='border-border sm:h-sidebar-header flex flex-col items-center justify-between gap-4 border-b px-2 py-2 sm:flex-row sm:py-0'>
          <h1 className='text-3xl'>Collection of lessons</h1>

          <div className='flex items-center justify-center gap-2'>
            <Button asChild>
              <Link href='/collection/create'>
                <PlusIcon />
                Create new lesson
              </Link>
            </Button>
            <Button size='icon' variant='secondary' className='md:hidden'>
              <span className='sr-only'>Filter Button</span>
              <Funnel />
            </Button>
          </div>
        </div>

        <ul>
          <Suspense fallback={<div>Loading...</div>}>
            <CollectionLessons />
          </Suspense>
        </ul>
      </SidebarContent>

      <SidebarSidepanel>
        <div className='border-border flex h-12 items-center justify-between border-b px-4'>
          <p className='text-2xl'>Filter & Sort</p>
        </div>

        <section className='px-4'>
          <h3 className='my-1 text-lg'>Lesson created by ? </h3>
          <div className='flex flex-wrap gap-2'>
            {items.map((item) => (
              <div
                key={`${id}-${item.value}`}
                className='border-input has-data-[state=checked]:border-primary/75 has-data-[state=checked]:bg-background/5 relative flex cursor-pointer gap-2 rounded-md border p-2 shadow-xs outline-none'
              >
                <div className='flex justify-between gap-2'>
                  <Checkbox
                    id={`${id}-${item.value}`}
                    value={item.value}
                    className='order-1 after:absolute after:inset-0'
                    defaultChecked={item.defaultChecked}
                  />
                </div>
                <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
              </div>
            ))}
          </div>
        </section>
      </SidebarSidepanel>
    </SidebarWrapper>
  )
}
