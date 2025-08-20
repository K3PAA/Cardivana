import React, { ReactNode } from 'react'

export default function SidebarWrapper({ children }: { children: ReactNode }) {
  return (
    <section className='border-border grid min-h-[calc(100dvh_-_var(--navigation-height))] grid-cols-[1fr_300px] border-x'>
      {children}
    </section>
  )
}
