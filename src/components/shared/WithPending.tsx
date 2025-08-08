import { Loader } from 'lucide-react'
import { ReactNode } from 'react'

type WithPendingProps = {
  isPending: boolean
  pendingText?: string
  children: ReactNode
}

export default function WithPending({
  pendingText = 'Laoding...',
  isPending,
  children,
}: WithPendingProps) {
  if (isPending)
    return (
      <>
        <Loader className='size-4 animate-spin' /> {pendingText}
      </>
    )

  return children
}
