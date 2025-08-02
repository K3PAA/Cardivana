import { Loader } from 'lucide-react'
import { ReactNode } from 'react'

type WithPendingProps = {
  isPending: boolean
  children: ReactNode
}

export default function WithPending({ isPending, children }: WithPendingProps) {
  if (isPending)
    return (
      <>
        <Loader className='size-4 animate-spin' /> Loading...
      </>
    )

  return children
}
