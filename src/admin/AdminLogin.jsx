import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer1 from '../components/footer1'
import './admin.css'

const AdminLogin = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <>
      <div className=' admin-section'>
        <h1 className='admin-login-header'>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className='form-input-box'>
            <label className='admin-label'>Username:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setUsername(e.target.value)}
              type='text'
            />
          </div>
          <div className='form-input-box'>
            <label className='admin-label'>Password:</label>
            <input
              className='admin-text-input'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
          </div>

          <div className='btn-login-box'>
            <button className='btn admin-btn'>Login</button>
          </div>
        </form>
      </div>
      <Footer1 />
    </>
  )
}

export default AdminLogin
