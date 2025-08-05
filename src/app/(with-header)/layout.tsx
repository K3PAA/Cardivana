import Header from '@/components/shared/header/Header'
import Wrapper from '@/components/shared/Wrapper'
import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Wrapper className='mt-navigation-height'>{children}</Wrapper>
    </>
  )
}
