import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { getUser } from './apiProjects'

export function useLogin() {
  //   const { isLoading, isError, data } = useQuery({
  //     queryKey: ['user'],
  //     queryFn: () => getUser({ email, password }),
  //   })

  const { mutate, data, isError, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ email, password }) => getUser({ email, password }),
    onSuccess: (data) => {
      toast.success('Successful', {
        duration: 4000,
      })
      window.location.replace('/admin')
      localStorage.setItem('user', JSON.stringify(data))
    },
    onError: () => {
      toast.error('Email or Password is not correct', {
        duration: 10000,
      })
    },
    // onError: ()=> console.log('aaaa')
  })

  return {
    isLoading,
    isError,
    mutate,
    data,
    isAuthenticated: data?.user?.role === 'authenticated',
  }
}
