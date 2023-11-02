import { uuid } from 'uuidv4'
import supabase from './supabase'

export const apiProjects = async function() {
  const { data, error } = await supabase.from('project').select('*')

  // const { data, error } = await supabase
  //   .from('project')
  //   .select('*')
  //   .range(0, 9)

  if (error) {
    // console.error(error)
    throw new Error('Projects not found')
  }

  return data
}

export async function getPaginate(currentStart, currentEnd) {
  const { data, error } = await supabase
    .from('project')
    .select('*')
    .range(currentStart, currentEnd)

  if (error) {
    // console.error(error)
    throw new Error('Projects not found')
  }

  // console.log(currentStart, currentEnd, data)

  return data
}

export async function singleProject(id) {
  // console.log(id)
  const { data, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', id)

  // const { data, error } = await supabase
  //   .from('cities')
  //   .select('name, country_id')
  //   .eq('name', 'The Shire') // Correct

  if (error) {
    // console.error(error)
    throw new Error('Project not found')
  }

  return data
}

export async function uploadProject(submittedData) {
  //   console.log(submittedData)
  const { data, error } = await supabase
    .from('project')
    .insert([submittedData])
    .select()
  if (error) {
    // console.error(error)
    throw new Error('Project not found')
  }

  return data
}

export async function uploadImage(image) {
  //   const filename = `${uuid()}-${image.name}`

  // let imageFile, imageError

  // for (let i = 0; i < image.length; i++) {
  //   const { data, error } = await supabase.storage
  //     .from('image')
  //     .upload(`${image[i]?.name}`, image[i], {
  //       cacheControl: '3600',
  //       upsert: false,
  //     })

  // console.log(image)

  //   return { data, error }
  // }

  // if (imageError) {
  //   throw new Error('Project not found')
  // }

  // return imageFile

  const { data, error } = await supabase.storage
    .from('image')
    .upload(`${image?.name}`, image, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    throw new Error('Project not found')
  }

  return data
}

////////

export async function getUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    // console.error(error)
    throw new Error('Project not found')
  }

  //   console.log({ email, password }, 'aaaaaaa')
  return data
}

export async function getImage(image) {
  const { error, publicURL } = supabase.storage
    .from('image')
    .getPublicUrl(`public/${image?.name}`)

  if (error) {
    // console.error(error)
    throw new Error('Image cannot be uploaded')
  }

  return publicURL
}
