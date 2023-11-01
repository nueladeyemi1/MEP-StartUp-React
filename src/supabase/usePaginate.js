import { useQuery } from '@tanstack/react-query'
import { apiProjects, getPaginate, singleProject } from './apiProjects'

export function usePaginate(currentStart, currentEnd) {
  const { data: paginatedData, isLoading } = useQuery({
    queryKey: ['paginate'],
    queryFn: () => getPaginate(currentStart, currentEnd),
  })

  //   console.log(paginatedData, currentStart, currentEnd)

  return { paginatedData, isLoading }
}
