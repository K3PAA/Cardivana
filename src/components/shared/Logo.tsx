import { cn } from '@/lib/utils'
import Link from 'next/link'

type LogoProps = {
  className?: string
}
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href='/'
      className={cn(
        'text-primary text-shadow-border text-2xl font-bold text-shadow-lg',
        className,
      )}
    >
      Cardivana
    </Link>
  )
}
