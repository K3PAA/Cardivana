import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section
      className='home py-16 md:py-32'
      style={{
        backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%',
      }}
    >
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mx-auto max-w-2xl space-y-6 text-center'>
          <h3 className='text-center text-4xl font-semibold lg:text-5xl'>
            Pricing
          </h3>
          <p>
            We have a generous free plan so you can explore our application
            without paying anything. However, if you want to get the full
            experience, consider one of our plans.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:mt-20 md:grid-cols-3'>
          <Card className='flex flex-col'>
            <CardHeader>
              <CardTitle className='font-medium'>With account</CardTitle>
              <span className='my-3 block text-2xl font-semibold'>$0 / mo</span>
            </CardHeader>

            <CardContent className='space-y-4'>
              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {[
                  '3 personal lessons',
                  'Up to 25 flashcards in each lesson',
                  '3 lesson prints daily',
                  'Only publiclt visible lessons',
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <Check className='size-3' />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto'>
              <Button asChild variant='outline' className='w-full'>
                <Link href='/auth/register'>register</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className='relative'>
            <span className='from-primary to-primary/75 text-primary-foreground absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-br/increasing px-3 py-1 text-xs font-medium ring-1 ring-white/20 ring-offset-1 ring-offset-gray-950/5 ring-inset'>
              Full functionality
            </span>

            <div className='flex flex-col'>
              <CardHeader>
                <CardTitle className='font-medium'>Pro</CardTitle>
                <span className='my-3 block text-2xl font-semibold'>
                  $12.99 / mo
                </span>
              </CardHeader>

              <CardContent className='mt-4 space-y-4'>
                <hr className='border-dashed' />
                <ul className='list-outside space-y-3 text-sm'>
                  {[
                    'Unlimited cards',
                    'Unlimited folders',
                    'Can choose folder visibility',
                    'Can set a price for their lessons',
                    'Receives 50 / 50 of the profit',
                  ].map((item, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Check className='size-3' />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className='mt-12'>
                <Button asChild className='w-full'>
                  <Link href=''>Get Started</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Card className='flex flex-col'>
            <CardHeader>
              <CardTitle className='font-medium'>Without Account</CardTitle>
              <span className='my-3 block text-2xl font-semibold'>$0 / mo</span>
            </CardHeader>

            <CardContent className='space-y-4'>
              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {['1 Print daily', 'Can learn through other people lesson'].map(
                  (item, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Check className='size-3' />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto'>
              <Button asChild variant='outline' className='w-full'>
                <Link href='explore'>explore without account</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
