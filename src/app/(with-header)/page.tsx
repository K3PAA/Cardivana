import Wrapper from '@/components/shared/Wrapper'
import { Button } from '@/components/ui/button'
import TextAnimate from '@/components/ui/text-animate'
import Pricing from './_components/Pricing'
import Testimonials from './_components/Testimonials'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <main
        className='home bg-background/20 grid min-h-[calc(100vh_-_var(--navigation-height))] place-content-center'
        style={{
          backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
          backgroundSize: '40px 40px, 40px 40px, 100% 100%',
        }}
      >
        <Wrapper className='-mt-32 flex h-full flex-col justify-between'>
          <section className='grid gap-4 text-center'>
            <div>
              <h1 className='sr-only'>
                Learn new language in the best possible way.
              </h1>
              <div className='flex flex-col items-center'>
                <TextAnimate
                  text='Learn new language '
                  type='fadeInUp'
                  className='text-2xl font-bold sm:text-5xl'
                />
                <TextAnimate
                  text='in the best possible way.'
                  type='fadeInUp'
                  className='text-2xl font-bold sm:text-5xl'
                />
              </div>
            </div>

            <p className='text-muted-foreground capitalized mx-auto max-w-[50ch] text-lg sm:text-xl'>
              Personalised learning pattern, printing flashcard functionality.
              Create your own lessons or learn from already created ones
            </p>

            <div className='flex justify-center gap-3'>
              <Button className='justify-self-center' asChild>
                <a href='#testimonials'>Learn more</a>
              </Button>
              <Button className='justify-self-center' variant='secondary'>
                <Link href='/explore'>Explore Lessons</Link>
              </Button>
            </div>
          </section>
        </Wrapper>
      </main>
      <Testimonials />
      <Pricing />
    </>
  )
}
