import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { LoginForm } from '@/lib/types'

import { loginFormSchema } from '../validation/auth-valid'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { authClient } from '../auth-client'

const defaultValues: LoginForm = {
  email: '',
  password: '',
}

export const useLoginUserForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  })
  async function onSubmit(values: LoginForm) {
    startTransition(async () => {
      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
        rememberMe: true,
      })

      if (error) {
        if (error) toast.error('Something went wrong!')
      } else {
        router.push('/profile')
      }
    })
  }

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  }
}
