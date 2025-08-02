import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterForm } from '@/lib/types'

import { registerFormSchema } from '../validation/auth-valid'
import { useTransition } from 'react'
import { registerUser } from '@/actions/auth-action'
import { toast } from 'sonner'

const defaultValues: RegisterForm = {
  email: '',
  password: '',
  repeatPassword: '',
}

export const useRegisterUserForm = () => {
  const [isRegisterPending, startRegisterTransition] = useTransition()

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  })

  async function onSubmit(values: RegisterForm) {
    startRegisterTransition(async () => {
      const user = await registerUser(values)
      if (user) {
        toast.success('Register completed succesfully')
      }
    })
  }

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending: isRegisterPending,
  }
}
