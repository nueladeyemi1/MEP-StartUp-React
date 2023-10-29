import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer1 from '../components/footer1'
import LoadingSpinner from '../components/LoadingSpinner'
import { Context } from '../context/Context'
import { useLogin } from '../supabase/useLogin'
import AdminLogin from './AdminLogin'

const ProtectedRoute = () => {
  const { username, password } = useContext(Context)

  //   console.log(username, password)

  const { isLoading, isError, isAuthenticated, data } = useLogin({
    email: username,
    password: password,
  })

  if (!isAuthenticated) return window.location.replace('/adminlogin')

  console.log(data, isLoading, isAuthenticated, isError)

  return isLoading ? (
    <>
      <LoadingSpinner />
      <Footer1 />
    </>
  ) : (
    <>{isAuthenticated ? <Outlet /> : <AdminLogin />}</>
  )
}

export default ProtectedRoute
