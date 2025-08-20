import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
  return (
    <section className='-mt-16 py-16 md:py-32' id='testimonials'>
      <div className='mx-auto max-w-6xl space-y-8 px-6 md:space-y-16'>
        <div className='relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12'>
          <h2 className='text-4xl font-medium lg:text-5xl'>
            Build by people that love to learn.
          </h2>
          <p className='text-muted-foreground text-lg'>
            Frustrated by the limitations of existing flashcard apps, we set out
            to create a comprehensive learning platform. Our solution combines
            spaced repetition, collaborative learning, and customizable study
            paths - addressing the real needs of students and professionals who
            want to learn effectively and retain knowledge long-term.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2'>
          <Card className='grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2'>
            <CardContent>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-xl font-medium'>
                  Cardivana has completely transformed my learning journey.
                  Before, I struggled to retain more than 20 new words per week,
                  but now I'm consistently learning 50+ words with better
                  long-term retention. The spaced repetition system and
                  collaborative features make the whole process engaging and
                  efficient. It's not just about memorizing - it's about truly
                  mastering the content.
                </p>

                <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/shekinah.webp'
                      alt='Shekinah Tshiokufila'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className='text-sm font-medium'>Jacob Turisto</cite>
                    <span className='text-muted-foreground block text-sm'>
                      Student
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className='md:col-span-2'>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-xl font-medium'>
                  Cardivana is perfect, it helped me a lot when I was preparing
                  to my exam. The printing functionality is a game changer. Now
                  I can learn without staring at the screen for long hours.
                </p>

                <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/jonathan.webp'
                      alt='Jonathan Yombo'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className='text-sm font-medium'>Jonathan Yombo</cite>
                    <span className='text-muted-foreground block text-sm'>
                      Translator
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p>
                  I can't recommend Cardivana enough! The spaced repetition and
                  printing functionality make it ideal for me. It's exactly what
                  I needed for my studies.
                </p>

                <div className='grid [grid-template-columns:auto_1fr] items-center gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/yucel.webp'
                      alt='Yucel Faruksahan'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className='text-sm font-medium'>
                      Yucel Faruksahan
                    </cite>
                    <span className='text-muted-foreground block text-sm'>
                      Creator, Tailkits
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className='card variant-mixed'>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p>
                  I love this app so much. Cardivana have completely
                  revolutionized the way I study.
                </p>

                <div className='grid grid-cols-[auto_1fr] gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/rodrigo.webp'
                      alt='Rodrigo Aguilar'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-sm font-medium'>Rodrigo Aguilar</p>
                    <span className='text-muted-foreground block text-sm'>
                      Creator, TailwindAwesome
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
