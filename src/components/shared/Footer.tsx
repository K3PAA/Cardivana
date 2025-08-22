import { navLinks } from '@/lib/data'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='border-border bg-card border-t py-12'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex flex-wrap justify-between gap-6'>
          <span className='text-muted-foreground order-last block text-center text-sm md:order-first'>
            © {new Date().getFullYear()} Cardivana, All rights reserved
          </span>
          <div className='order-first flex flex-wrap justify-center gap-6 text-sm md:order-last'>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-muted-foreground hover:text-primary block duration-150'
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
