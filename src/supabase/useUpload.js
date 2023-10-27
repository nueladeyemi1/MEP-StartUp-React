import { useMutation } from '@tanstack/react-query'
import { uploadProject } from './apiProjects'

export function useUpload() {
  const { isLoading, isError, mutate } = useMutation({
    mutationKey: ['upload'],
    mutationFn: (submittedData) => uploadProject(submittedData),
  })

  return { isLoading, isError, mutate }
}
