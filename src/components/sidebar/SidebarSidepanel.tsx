import React, { ReactNode } from 'react'

type SidebarSidepanelProps = {
  children: ReactNode
}
export default function SidebarSidepanel({ children }: SidebarSidepanelProps) {
  return <aside className='border-l'>{children}</aside>
}
