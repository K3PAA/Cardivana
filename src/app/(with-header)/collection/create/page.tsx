import CreateForm from '@/app/(with-header)/collection/_components/form/CreateForm'
import GoBackButton from '@/components/shared/GoBackButton'

export default function page() {
  return (
    <main className='my-8 px-4'>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='mb-2 text-3xl font-bold'>Create lesson</h1>
        <GoBackButton />
      </div>
      <CreateForm />
    </main>
  )
}
