import SidebarWrapper from '@/components/sidebar/SidebarWrapper'
import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarSidepanel from '@/components/sidebar/SidebarSidepanel'

export default function page() {
  return (
    <SidebarWrapper>
      <SidebarContent>Explore</SidebarContent>
      <SidebarSidepanel>Sidepanel</SidebarSidepanel>
    </SidebarWrapper>
  )
}
