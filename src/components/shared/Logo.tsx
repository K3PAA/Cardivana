import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}
export default function Logo({ className }: LogoProps) {
  return (
    <p
      className={cn(
        'text-primary text-shadow-border text-4xl font-bold text-shadow-lg',
        className,
      )}
    >
      Cardivana
    </p>
  )
}
