import { ReactNode } from 'react'

type StatCardProps = {
  title: string
  value: number
  children: ReactNode
}

export default function StatCard({ title, children, value }: StatCardProps) {
  return (
    <li className='bg-card border-border relative flex flex-col rounded-lg border p-4 text-center'>
      <p className='text-sm'>{title}</p>
      <p className='mt-3 flex items-center justify-center gap-2 font-bold'>
        {value}
        {children}
      </p>
    </li>
  )
}
