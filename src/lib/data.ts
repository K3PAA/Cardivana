export const navLinks = [
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

export const sortByOptions = [
  { value: 'AZ', label: 'From A to Z' },
  { value: 'ZA', label: 'From Z to A' },
  { value: 'RECENT', label: 'Most recently taken' },
  { value: 'MOST_FLASHCARDS', label: 'Most flashcards' },
] as const
