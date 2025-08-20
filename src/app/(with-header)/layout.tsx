import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header/Header'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
