import { getTagsFromUserLessons } from '@/dal/lesson'
import TagsFieldData from './TagsFieldData'

export default async function TagsField() {
  const tags = await getTagsFromUserLessons()

  const items = tags.map((tag) => {
    return { value: tag, label: tag }
  })

  return <TagsFieldData items={items} />
}
