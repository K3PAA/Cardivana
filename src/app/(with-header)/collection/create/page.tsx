import CreateForm from '@/app/(with-header)/collection/_components/form/CreateForm'

export default function page() {
  return (
    <main className='pt-4'>
      <h1 className='mb-2 text-3xl font-bold'>Create lesson</h1>
      <CreateForm />
    </main>
  )
}
