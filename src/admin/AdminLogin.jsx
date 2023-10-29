import { useContext } from 'react'
// import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Footer1 from '../components/footer1'
import { Context } from '../context/Context'
import { useLogin } from '../supabase/useLogin'
import './admin.css'

const AdminLogin = () => {
  const { setUsername, setPassword } = useContext(Context)
  const navigate = useNavigate()

  //   function handleLogin(e) {
  // e.preventDefault()
  //     navigate('/admin')
  //   }

  return (
    <>
      {/* <Outlet /> */}
      <div className=' admin-section'>
        <h1 className='admin-login-header'>Admin Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-input-box'>
            <label className='admin-label'>Username:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              required
            />
          </div>
          <div className='form-input-box'>
            <label className='admin-label'>Password:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              required
            />
          </div>

          <div className='btn-login-box'>
            <Link to='/admin' className='btn admin-btn'>
              Login
            </Link>
          </div>
        </form>
      </div>
      <Footer1 />
    </>
  )
}

export default AdminLogin
