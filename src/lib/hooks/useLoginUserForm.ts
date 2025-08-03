import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'

import { LoginForm } from '@/lib/types'
import { loginFormSchema } from '../validation/auth-valid'
import { loginUserAction } from '@/actions/auth-action'

const defaultValues: LoginForm = {
  email: '',
  password: '',
}

export const useLoginUserForm = () => {
  const { executeAsync, isPending } = useAction(loginUserAction)

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  })
  async function onSubmit(values: LoginForm) {
    executeAsync(values)
  }

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
