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
import RegisterForm from './_components/RegisterForm'

export default async function page() {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-center text-2xl'>Register</CardTitle>
      </CardHeader>

      <CardContent>
        <RegisterForm />
      </CardContent>

      <CardFooter className='grid gap-2 sm:grid-cols-2'>
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

        <p className='text-muted-foreground col-span-full text-center text-sm'>
          Already have an account ? Click here to
          <Button variant='link' className='px-2' asChild>
            <Link href='/auth/login'>login</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  )
}
