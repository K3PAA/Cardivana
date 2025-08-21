import Wrapper from '@/components/shared/Wrapper'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return <Wrapper className='mt-0 px-0'>{children}</Wrapper>
}
