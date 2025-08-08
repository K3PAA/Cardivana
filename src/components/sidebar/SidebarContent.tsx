import { ReactNode } from 'react'

type SidebarContentProps = {
  children: ReactNode
}

export default function SidebarContent({ children }: SidebarContentProps) {
  return <main>{children}</main>
}
