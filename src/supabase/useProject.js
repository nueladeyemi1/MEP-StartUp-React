import { useQuery } from '@tanstack/react-query'
import { apiProjects, singleProject } from './apiProjects'

export function useProject() {
  const { isLoading, data } = useQuery({
    queryKey: ['projects'],
    queryFn: apiProjects,
  })

  //   console.log(data)
  return { data, isLoading }
}

// export function useSingleProject(id) {
//   const { isLoading, project } = useQuery({
//     queryKey: ['projects'],
//     queryFn: singleProject(id),
//   })

//   //   console.log(data)
//   return { project, isLoading }
// }
