import { Button } from '@/components/ui/button'
import { Flashcard } from '@/lib/types'
import { getWordExternalData } from '@/lib/words-api'
import SpeakButton from './SpeechButton'

type FlashcardWrapperProps = {
  flashcard: Flashcard
}

export default async function FlashcardWrapper({
  flashcard,
}: FlashcardWrapperProps) {
  if (!flashcard.front || !flashcard.back) {
    return <main>No flashcard, something went wrong!</main>
  }

  const word = await getWordExternalData(flashcard.front.text)
  console.log(flashcard, word)

  return (
    <main className='flex h-full flex-col justify-between py-8'>
      <section>
        <div className='text-center'>
          <p className='text-muted-foreground text-2xl'>
            Do you know this word ?
          </p>
          <div className='flex items-center justify-center gap-4'>
            <h1 className='flex items-center justify-center gap-2 text-5xl font-bold'>
              {flashcard.front.text}{' '}
              {word.phonetics && (
                <span className='text-muted-foreground text-3xl italic'>
                  {word.phonetics}
                </span>
              )}
            </h1>
            {word.audio && <SpeakButton audio={word.audio} />}
          </div>
          {word.partOfSpeech && (
            <p className='text-muted-foreground font-bold'>
              Part of speech: ( {word.partOfSpeech} )
            </p>
          )}
        </div>

        <div className='mt-4 grid grid-cols-2 gap-5'>
          <div className='border-border border-2 border-dashed p-8'>
            <h2 className='text-muted-foreground'>Definition</h2>
            <p>{flashcard.front.definition || word.definition}</p>

            <h3 className='text-muted-foreground mt-4'> Synonyms </h3>
            <ul>
              {flashcard.front.synonyms.map((synonym) => {
                return <li key={synonym.text}>{synonym.text}</li>
              })}
            </ul>
          </div>
          <div className='border-border border-2 border-dashed p-8'>
            <h2 className='text-muted-foreground'>Example</h2>
            <p>{flashcard.front.example || word.example}</p>

            <h3 className='text-muted-foreground mt-4'> Antonyms </h3>
            <ul>
              {flashcard.front.antonyms.map((antonym) => {
                return <li key={antonym.text}>{antonym.text}</li>
              })}
            </ul>
          </div>
        </div>
      </section>

      <div className='grid grid-cols-2 gap-5'>
        <Button variant='destructive'>No, I don't know</Button>
        <Button>Yes, I know</Button>
      </div>
    </main>
  )
}
