import { db } from '@/db'
import { lesson } from '@/db/schema/lesson'
import TagsFieldData from './TagsFieldData'

export default async function TagsField() {
  const allTags = [
    ...new Set(
      (await db.select().from(lesson))
        .map((val) => val.tags.join(' '))
        .join(' ')
        .split(' ')
        .filter(Boolean),
    ),
  ]

  const items = allTags.map((tag) => {
    return { value: tag, label: tag }
  })

  return <TagsFieldData items={items} />
}
