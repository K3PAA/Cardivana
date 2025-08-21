import React, { ReactNode } from 'react'

type SidebarSidepanelProps = {
  children: ReactNode
}
export default function SidebarSidepanel({ children }: SidebarSidepanelProps) {
  return (
    <aside className='border-border md:bg-background hidden border-l md:block md:p-2'>
      {children}
    </aside>
  )
}
