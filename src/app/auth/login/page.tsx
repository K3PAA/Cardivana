import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { RiGithubFill, RiGoogleFill } from '@remixicon/react'
import Link from 'next/link'
import LoginForm from './_components/LoginForm'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (session) redirect('/')

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-center text-2xl'>Login</CardTitle>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>

      <CardFooter className='grid grid-cols-2 gap-2'>
        <div className='relative col-span-full flex h-5 items-center justify-center text-center'>
          <p className='bg-card text-muted-foreground relative z-10 px-2 text-sm'>
            or continue with
          </p>
          <Separator className='absolute top-1/2 left-0 translate-y-1/2' />
        </div>
        <Button variant='outline'>
          <RiGoogleFill
            className='me-1 text-[#DB4437] dark:text-white/60'
            size={16}
            aria-hidden='true'
          />
          Login with Google
        </Button>
        <Button variant='outline'>
          <RiGithubFill
            className='me-1 text-[#333333] dark:text-white/60'
            size={16}
            aria-hidden='true'
          />
          Login with GitHub
        </Button>

        <p className='text-muted-foreground col-span-full text-sm'>
          Don&apos;t have an account yet ? Click here to
          <Button variant='link' className='px-2'>
            <Link href='/auth/register'> register</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  )
}
