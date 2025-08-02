import 'server-only'
import { cache } from 'react'
import { redirect } from 'next/navigation'
import { sleep } from '@/lib/utils'

export const verifyUser = cache(async () => {
  await sleep(5000)
  const user = { name: 'test' }

  if (!user) {
    redirect('/login')
  }

  return user
})
