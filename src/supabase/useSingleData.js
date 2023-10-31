import { useQuery } from '@tanstack/react-query'
import { singleProject } from './apiProjects'

export function useSingleData(id) {
  const { data, isLoading } = useQuery({
    queryKey: ['single-data'],
    queryFn: () => singleProject(id),
  })

  // console.log(data)

  return { data, isLoading }
}
