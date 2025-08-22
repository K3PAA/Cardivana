export const getWordExternalData = async (text: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${text.toLowerCase()}`,
  )
  const data = await response.json()

  const word = {
    audio: data[0].phonetics[0].audio || null,
    partOfSpeech: data[0].meanings[0].partOfSpeech || null,
    phonetics: data[0].phonetics[0].text || null,
    definition: data[0].meanings[0].definitions[0].definition || null,
    example: data[0].meanings[0].definitions[0].example || null,

    synonyms: data[0].meanings[0].definitions[0].synonyms,
    antonyms: data[0].meanings[0].definitions[0].antonyms,
  }

  return word
}
