import SidebarWrapper from '@/components/sidebar/SidebarWrapper'
import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarSidepanel from '@/components/sidebar/SidebarSidepanel'
import Wrapper from '@/components/shared/Wrapper'
import { Button } from '@/components/ui/button'
import { Funnel } from 'lucide-react'

export default function page() {
  return (
    <Wrapper className='mt-0'>
      <SidebarWrapper>
        <SidebarContent className=''>
          <div className='md:h-sidebar-header border-border flex items-center justify-between border-b px-2 py-2 sm:py-0'>
            <div className=''>
              <h1 className='text-2xl font-semibold'>
                Explore <span className='hidden sm:inline'>available</span>{' '}
                lessons
              </h1>
              <p className='text-muted-foreground text-sm'>
                Find what interest&apos;s you.{' '}
                <span className='hidden sm:inline'>
                  Instead of creating lesson on your own use what other people
                  already created.
                </span>
              </p>
            </div>

            <Button size='icon' variant='secondary' className='md:hidden'>
              <span className='sr-only'>Filter Button</span>
              <Funnel />
            </Button>
          </div>
        </SidebarContent>
        <SidebarSidepanel>Sidepanel</SidebarSidepanel>
      </SidebarWrapper>
    </Wrapper>
  )
}
