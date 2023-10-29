import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
// import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Footer1 from '../components/footer1'
import { Context } from '../context/Context'
import { useLogin } from '../supabase/useLogin'
import './admin.css'

const AdminLogin = () => {
  const { username, password, setUsername, setPassword } = useContext(Context)
  const navigate = useNavigate()

  console.log(username, password)

  const { isLoading, isError, mutate } = useLogin()

  //   const { isLoading, isError, isAuthenticated, data } = useLogin({
  //     email: username,
  //     password: password,
  //   })

  //   console.log(data)

  //   function handleLogin(e) {
  // e.preventDefault()
  //   }

  return (
    <>
      {/* <Outlet /> */}
      <div className=' admin-section'>
        <h1 className='admin-login-header'>Admin Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // window.location.replace('/admin')
            mutate({
              email: username,
              password: password,
            })
          }}
        >
          <div className='form-input-box'>
            <label className='admin-label'>Username:</label>
            <input
              value={username}
              className='admin-text-input'
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              required
            />
          </div>
          <div className='form-input-box'>
            <label className='admin-label'>Password:</label>
            <input
              value={password}
              className='admin-text-input'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              required
            />
          </div>
          <div className='btn-login-box'>
            <button className='btn admin-btn' disabled={isLoading}>
              Submit
            </button>
          </div>

          {/* <div className='btn-login-box'>
            <Link to='/admin' className='btn admin-btn'>
              Login
            </Link>
          </div> */}
        </form>
        <Toaster />
      </div>
      <Footer1 />
    </>
  )
}

export default AdminLogin
