import { ReactNode } from 'react'

type SidebarContentProps = {
  children: ReactNode
  className?: string
}

export default function SidebarContent({
  children,
  className,
}: SidebarContentProps) {
  return <main className={className}>{children}</main>
}
