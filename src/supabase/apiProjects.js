import { uuid } from 'uuidv4'
import supabase from './supabase'

export const apiProjects = async function() {
  // const { data, error } = await supabase.from('project').select('*')

  const { data, error } = await supabase
    .from('project')
    .select('*')
    .range(0, 9)

  if (error) {
    // console.error(error)
    throw new Error('Projects not found')
  }

  return data
}

// export async function getPaginate() {

// const { data, error } = await supabase
//   .from('countries')
//   .select('name')
//   .range(0, 1)
// }

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
  //   const rand = uuid().v4
  //   console.log('aaaaaaaaaaaaaaaaaaaa4')

  //   const filename = `${uuid()}-${image.name}`

  const { data, error } = await supabase.storage
    .from('image')
    .upload(`${image?.name}`, image, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    // console.error(error)
    throw new Error('Project not found')
  }

  //   if (data === undefined) return
  //   console.log(imageFile)
  return data
}

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
