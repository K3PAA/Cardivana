import Link from 'next/link'

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/explore',
    label: 'Explore Lessons',
  },
  {
    href: '/collection',
    label: 'My Collection',
  },
  {
    href: '/profile',
    label: 'Profile',
  },
]

export default function Footer() {
  return (
    <footer className='border-border border-t bg-white py-12 dark:bg-transparent'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex flex-wrap justify-between gap-6'>
          <span className='text-muted-foreground order-last block text-center text-sm md:order-first'>
            © {new Date().getFullYear()} Tailark, All rights reserved
          </span>
          <div className='order-first flex flex-wrap justify-center gap-6 text-sm md:order-last'>
            {links.map((link, index) => (
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
