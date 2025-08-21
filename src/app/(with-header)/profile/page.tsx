import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { Suspense } from 'react'
import EditCredentials from './_components/EditCredentials'
import Stats from './_components/Stats'
import Wrapper from '@/components/shared/Wrapper'
import { sleep } from '@/lib/utils'

export default async function page() {
  await sleep(3000)

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) return <p>Unauthorized</p>

  const { user } = session
  const accountCreated = Math.floor(
    (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24),
  )

  return (
    <Wrapper className='my-8'>
      <h1 className='text-3xl font-bold'>My profile</h1>
      <EditCredentials user={user} />

      <Suspense fallback={<>Loading...</>}>
        <Stats accountCreated={accountCreated} />
      </Suspense>
    </Wrapper>
  )
}
