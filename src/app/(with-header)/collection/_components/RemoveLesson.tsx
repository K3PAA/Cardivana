'use client'
import { CircleAlertIcon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { removeLessonAction } from '@/actions/lesson-action'
import { useAction } from 'next-safe-action/hooks'
import WithPending from '@/components/shared/WithPending'
import { toast } from 'sonner'

export default function RemoveLesson({ lessonId }: { lessonId: string }) {
  const { executeAsync, isPending } = useAction(removeLessonAction)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant='destructive'
          disabled={isPending}
          className='capitalize'
        >
          <WithPending isPending={isPending} pendingText='removing...'>
            remove
          </WithPending>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className='flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4'>
          <div
            className='flex size-9 shrink-0 items-center justify-center rounded-full border'
            aria-hidden='true'
          >
            <CircleAlertIcon className='opacity-80' size={16} />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action is pernament and you can not restore your lesson.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <Button asChild variant='destructive'>
            <AlertDialogAction
              onClick={async () => {
                const result = await executeAsync({ lessonId })
                if (result.data?.success) toast.success('Removed lesson')
              }}
            >
              remove
            </AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
