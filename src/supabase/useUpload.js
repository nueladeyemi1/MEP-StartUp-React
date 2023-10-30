import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { uploadProject } from './apiProjects'

export function useUpload() {
  const { isLoading, isError, mutate } = useMutation({
    mutationKey: ['upload'],
    mutationFn: (submittedData) => uploadProject(submittedData),

    onSuccess: () =>
      toast.success('Project successfully created', {
        duration: 10000,
      }),

    onError: () =>
      toast.error('Error creating project, please try again.', {
        duration: 10000,
      }),
  })

  return { isLoading, isError, mutate }
}
