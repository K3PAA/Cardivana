import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type BasicInfoProps = {
  user: {
    id: string
    email: string
    emailVerified: boolean
    name: string
    createdAt: Date
    updatedAt: Date
    image?: string | null | undefined | undefined
    role: 'user' | 'pro' | 'admin'
  }
}

export default function BasicInfo({ user }: BasicInfoProps) {
  return (
    <form
      action=''
      className='bg-card border-border mt-4 rounded-lg border p-5'
    >
      <h2 className='text-3xl font-bold'>Edit Credentials</h2>

      <div className='mt-4 grid gap-4 sm:grid-cols-2'>
        <div className='grid gap-2'>
          <Label>Name</Label>
          <Input defaultValue={user.name} />
        </div>
        <div className='grid gap-2'>
          <Label>Email</Label>
          <Input defaultValue={user.email} />
        </div>
      </div>

      <div className='mt-4 flex justify-end gap-2'>
        <Button>Edit</Button>
        <Button variant='secondary'>Change Password</Button>
      </div>
    </form>
  )
}
