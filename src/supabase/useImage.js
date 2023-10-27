import { useQuery } from '@tanstack/react-query'
import { uploadImage } from './apiProjects'

export function useImage(image) {
  const { isLoading, data: imageData } = useQuery({
    queryKey: ['image-upload'],
    queryFn: (image) => uploadImage(image),
  })

  //   console.log(data)
  return { imageData, isLoading }
}
