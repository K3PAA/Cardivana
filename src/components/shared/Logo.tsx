import { cn } from '@/lib/utils'
import Link from 'next/link'

type LogoProps = {
  className?: string
}
export default function Logo({ className }: LogoProps) {
  return (
    <Link href='/' className={cn('text-primary', className)}>
      <p className='text-xl font-bold'>Cardivana</p>
    </Link>
  )
}
