import { getUserLessons } from '@/dal/lesson'
import CollectionLessons from './CollectionLessons'
export default async function GetCollectionLessons() {
  const lessons = await getUserLessons()

  return <CollectionLessons lessons={lessons} />
}
