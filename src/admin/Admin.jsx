import { useState } from 'react'
import Footer1 from '../components/footer1'
import supabase from '../supabase/supabase'
import { useImage } from '../supabase/useImage'
import { useUpload } from '../supabase/useUpload'

import './admin.css'

const Admin = () => {
  const [projectName, setProjectName] = useState('')
  const [client, setClient] = useState('')
  const [service, setService] = useState('')
  const [description, setDescription] = useState('')
  const [projectStatus, setProjectStatus] = useState('')
  const [image, setImage] = useState('')

  const { isLoading, mutate } = useUpload()

  //   const { imageData } = useImage(image)
  //   console.log(imageData, image)

  const { publicURL } = supabase.storage
    .from('image')
    .getPublicUrl(`public/${image.name}`)

  //   console.log({
  //     project_name: projectName,
  //     client,
  //     service,
  //     description,
  //     projectStatus,
  //     image,
  //   })

  const submittedData = {
    project_name: projectName,
    client: client,
    services: service,
    description: description,
    project_status: projectStatus,
    image: `https://vkcbawkttdldhnomilir.supabase.co/storage/v1/object/public/image/${image.name}`,
  }

  function handleSubmit(e) {
    e.preventDefault()
    mutate(submittedData)
    console.log('aaaaaaaaa')
  }

  return (
    <>
      <div className=' admin-section'>
        <form onSubmit={handleSubmit}>
          <div className='form-input-box'>
            <label className='admin-label'>Project Name:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setProjectName(e.target.value)}
              type='text'
            />
          </div>
          <div className='form-input-box'>
            <label className='admin-label'>Client/Architect:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setClient(e.target.value)}
              type='text'
            />
          </div>
          <div className='form-input-box'>
            <label className='admin-label'>Services:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setService(e.target.value)}
              type='text'
            />
          </div>
          <div className='form-input-box'>
            <label className='admin-label'>Description:</label>
            <textarea
              className='admin-textarea'
              onChange={(e) => setDescription(e.target.value)}
              type='text'
            />
          </div>

          <div className='form-input-box'>
            <label className='admin-label'>Project Status:</label>
            <select
              className='admin-select'
              onChange={(e) => setProjectStatus(e.target.value)}
            >
              <option>On-going</option>
              <option>Completed</option>
              <option>Commission</option>
            </select>
          </div>

          <div className='form-input-box'>
            <label className='admin-label'>Upload Image:</label>
            <input onChange={(e) => setImage(e.target.files[0])} type='file' />
          </div>

          <button className='btn admin-btn'>Submit</button>
        </form>
      </div>
      <Footer1 />
    </>
  )
}

export default Admin
