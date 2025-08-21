import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header/Header'

import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
