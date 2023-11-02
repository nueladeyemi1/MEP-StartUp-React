import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
// import { Outlet } from 'react-router-dom'
import Footer1 from '../components/footer1'
import LoadingSpinner from '../components/LoadingSpinner'
import supabase from '../supabase/supabase'
import { useImage } from '../supabase/useImage'
import { useUpload } from '../supabase/useUpload'

import './admin.css'

const Admin = () => {
  const [projectName, setProjectName] = useState('')
  const [client, setClient] = useState('')
  const [service, setService] = useState('')
  const [description, setDescription] = useState('')
  const [projectStatus, setProjectStatus] = useState('On-going')
  const [image, setImage] = useState([])

  // const imageRef = useRef()

  const queryClient = useQueryClient()

  const { isLoading, mutate } = useUpload()

  const { mutateFile, data } = useImage()

  useEffect(() => {
    mutateFile(image[0])

    // image?.forEach((img) => {
    //   mutateFile(img)
    // })
  }, [image])

  // console.log(data, image)

  async function logout() {
    let { error } = await supabase.auth.signOut()

    if (error) toast.error('error, loging out. Please try again!')
  }

  const submittedData = {
    project_name: projectName,
    client: client,
    services: service,
    description: description,
    project_status: projectStatus,
    image: `https://vkcbawkttdldhnomilir.supabase.co/storage/v1/object/public/image/${data?.path}`,
  }

  function handleSubmit(e) {
    e.preventDefault()
    mutate(submittedData)
    e.target.reset()
    // console.log('aaaaaaaaa')
  }

  function handleLogout() {
    logout()
    localStorage.removeItem('user')
    window.location.replace('/adminlogin')
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className=' admin-section'>
            <form onSubmit={handleSubmit}>
              <div className='form-input-box'>
                <label className='admin-label'>Project Name:</label>
                <input
                  className='admin-text-input'
                  onChange={(e) => setProjectName(e.target.value)}
                  type='text'
                  required
                />
              </div>
              <div className='form-input-box'>
                <label className='admin-label'>Client/Architect:</label>
                <input
                  className='admin-text-input'
                  onChange={(e) => setClient(e.target.value)}
                  type='text'
                  required
                />
              </div>
              <div className='form-input-box'>
                <label className='admin-label'>Services:</label>
                <input
                  className='admin-text-input'
                  onChange={(e) => setService(e.target.value)}
                  type='text'
                  required
                />
              </div>
              <div className='form-input-box'>
                <label className='admin-label'>Description:</label>
                <textarea
                  className='admin-textarea'
                  onChange={(e) => setDescription(e.target.value)}
                  type='text'
                  required
                />
              </div>

              <div className='form-input-box'>
                <label className='admin-label'>Project Status:</label>
                <select
                  className='admin-select'
                  onChange={(e) => setProjectStatus(e.target.value)}
                  required
                >
                  <option>On-going</option>
                  <option>Completed</option>
                  <option>Commission</option>
                </select>
              </div>

              <div className='form-input-box'>
                <label className='admin-label'>Upload Image:</label>
                <input
                  accept='image/*'
                  multiple
                  onChange={(e) => {
                    setImage(e.target.files)
                    // mutateFile(image[0])
                    // console.log(image)

                    // image.map((img) => mutateFile(img))
                    // queryClient.invalidateQueries({
                    //   queryKey: ['upload-image'],
                    // })
                  }}
                  type='file'
                />
              </div>
              <div className='btn-login-box'>
                <button className='btn admin-btn'>Submit</button>
              </div>
            </form>

            <button
              style={{ backgroundColor: 'red' }}
              className='btn admin-btn admin-logout'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <Toaster />
        </>
      )}
      <Footer1 />
    </>
  )
}

export default Admin
