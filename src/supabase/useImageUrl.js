import { useQuery } from '@tanstack/react-query'
import { getImage } from './apiProjects'

export function useImage(image) {
  const { publicURL } = useQuery({
    queryFn: () => getImage(image),
    queryKey: ['image-link'],
  })

  return publicURL
}
