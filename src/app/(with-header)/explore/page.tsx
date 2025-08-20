import SidebarWrapper from '@/components/sidebar/SidebarWrapper'
import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarSidepanel from '@/components/sidebar/SidebarSidepanel'
import Wrapper from '@/components/shared/Wrapper'

export default function page() {
  return (
    <Wrapper className='mt-navigation-height'>
      <SidebarWrapper>
        <SidebarContent className=''>
          <div className='border-border border-b p-4'>
            <h1 className='text-3xl'>Explore</h1>
          </div>
        </SidebarContent>
        <SidebarSidepanel>Sidepanel</SidebarSidepanel>
      </SidebarWrapper>
    </Wrapper>
  )
}
