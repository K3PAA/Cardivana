'use client'
import MobileToggle from '@/components/ui/mobile-toggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../../ui/theme-toggle'
import Logo from '../Logo'
import Wrapper from '../Wrapper'
import AuthButtons from './AuthButtons'
import { navLinks } from '@/lib/data'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<'opened' | 'closing' | 'closed'>(() => {
    return isOpen ? 'opened' : 'closed'
  })
  const ulRef = useRef<HTMLUListElement>(null)

  const handleToggleClick = () => {
    setIsOpen((p) => {
      const value = !p

      if (value) setState('opened')
      else setState('closing')

      return value
    })
  }

  useEffect(() => {
    if (state !== 'closing') return

    ulRef.current?.addEventListener(
      'animationend',
      () => {
        setState('closed')
      },
      { once: true },
    )
  }, [state])

  useEffect(() => {
    if (!isOpen) return
    setIsOpen(false)
    setState('closing')
  }, [pathname, isOpen])

  return (
    <header className='bg-card border-border w-full border-b'>
      <Wrapper className='h-navigation-height mt-0 flex items-center justify-between gap-4'>
        <Logo />

        <nav className={cn('bg-card flex flex-row items-center md:w-full')}>
          <ul
            ref={ulRef}
            id='primary-navigation'
            data-state={state}
            className={cn(
              'top-navigation-height bg-card fixed left-0 z-10 flex w-full flex-col gap-2 overflow-auto border-b p-4 md:static md:h-auto md:translate-0 md:flex-row md:border-b-0 md:py-0 md:opacity-100',
            )}
          >
            {navLinks.map((link) => {
              return (
                <li
                  key={link.href}
                  className='border px-4 transition-all hover:scale-102 focus:scale-102 md:border-0 md:p-0 md:px-0 md:hover:scale-100 md:focus:scale-100'
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'h-navigation-height grid items-center capitalize md:place-content-center md:px-2',
                      {
                        'font-bold': pathname === link.href,
                        'text-foreground/70 hover:text-foreground font-medium transition-colors duration-200':
                          pathname !== link.href,
                      },
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <AuthButtons className='grid grid-cols-2 sm:hidden' />
          </ul>

          <div className='flex items-center gap-2'>
            <AuthButtons className='hidden sm:flex' />
            <ThemeToggle />
            <MobileToggle isOpen={isOpen} handleClick={handleToggleClick} />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}
