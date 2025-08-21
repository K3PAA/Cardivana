import React, { ReactNode } from 'react'

export default function SidebarWrapper({ children }: { children: ReactNode }) {
  return (
    <section className='border-border grid h-full md:grid-cols-[1fr_240px] md:border-x lg:grid-cols-[1fr_300px]'>
      {children}
    </section>
  )
}
