import Wrapper from '@/components/shared/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'

export default function loading() {
  return (
    <Wrapper>
      <Skeleton className='h-50 w-full' />

      <ul className='grid-auto mt-8'>
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i}>
            <Skeleton className='h-24 w-full' />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
