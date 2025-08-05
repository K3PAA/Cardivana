import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'

import { RegisterForm } from '@/lib/types'
import { registerFormSchema } from '../validation/auth-valid'
import { registerUserAction } from '@/actions/auth-action'

const defaultValues: RegisterForm = {
  email: '',
  password: '',
  repeatPassword: '',
}

export const useRegisterUserForm = () => {
  const { execute, isPending } = useAction(registerUserAction)

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  })

  async function onSubmit(values: RegisterForm) {
    execute(values)
  }

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
