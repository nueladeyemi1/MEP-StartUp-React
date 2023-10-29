import { useQuery } from '@tanstack/react-query'

import { getUser } from './apiProjects'

export function useLogin({ email, password }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser({ email, password }),
  })

  return {
    isLoading,
    isError,
    data,
    isAuthenticated: data?.user?.role === 'authenticated',
  }
}
