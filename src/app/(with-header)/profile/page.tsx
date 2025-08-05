import SignOutButton from '@/components/shared/SignOutButton'

import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) return <p>Unauthorized</p>

  return (
    <div>
      <pre className='text-small overflow-clip'>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}
