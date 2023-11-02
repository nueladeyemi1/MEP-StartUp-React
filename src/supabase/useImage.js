import { useMutation, useQuery } from '@tanstack/react-query'
import { getImage, uploadImage } from './apiProjects'

export function useImage() {
  ///

  //   const { data } = useQuery({
  //     queryFn: () => uploadImage(image),
  //     queryKey: ['upload-image'],
  //   })

  ///

  const { mutate: mutateFile, data } = useMutation({
    mutationFn: (data) => uploadImage(data),
    mutationKey: ['upload-image'],
  })

  //   if (data === undefined) return

  //   console.log(data)
  return { mutateFile, data }
}
