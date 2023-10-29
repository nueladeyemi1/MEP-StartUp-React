import supabase from './supabase'

export const apiProjects = async function() {
  const { data, error } = await supabase.from('project').select('*')

  if (error) {
    console.error(error)
    throw new Error('Projects not found')
  }

  return data
}

export async function singleProject(id) {
  console.log(id)
  const { data: project, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Project not found')
  }

  return project
}

export async function uploadProject(submittedData) {
  //   console.log(submittedData)
  const { data, error } = await supabase
    .from('project')
    .insert([submittedData])
    .select()
  if (error) {
    console.error(error)
    throw new Error('Project not found')
  }

  return data
}

export async function uploadImage(image) {
  //   console.log(submittedData)
  const { data, error } = await supabase.storage
    .from('image')
    .upload(`public/${image.name}`, image, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    console.error(error)
    throw new Error('Project not found')
  }

  return data
}

export async function getUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error(error)
    throw new Error('Project not found')
  }

  //   console.log({ email, password }, 'aaaaaaa')
  return data
}
