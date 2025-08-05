'use client'
import { authClient } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

const navigationLinks = [
  { href: '/', label: 'Home', private: false },
  { href: '/explore', label: 'Explore lessons', private: false },
  { href: '/library', label: 'My library', private: false },
  { href: '/profile', label: 'Profile', private: true },
] as const

export default function Nav() {
  const pathname = usePathname()
  const { data: session } = authClient.useSession()

  return (
    <NavigationMenu className='fixed top-[calc(var(--navigation-height)+1px)] left-0 w-full bg-blue-300'>
      <NavigationMenuList>
        {navigationLinks.map((link) => {
          return (
            <NavigationMenuItem
              key={link.href}
              className={cn({
                hidden: !session && link.private,
              })}
            >
              <NavigationMenuLink
                active={pathname === link.href}
                href={link.href}
                className={cn(
                  'relative grid h-[var(--navigation-height)] px-3 md:place-content-center md:py-0',
                  {
                    'after:bg-foreground text-foreground after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full':
                      pathname === link.href,
                    'after:bg-foreground/50 text-foreground/50 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-0 after:transition-all after:duration-300 hover:after:scale-100':
                      pathname !== link.href,
                  },
                )}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
