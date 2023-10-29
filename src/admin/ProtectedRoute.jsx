import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer1 from '../components/footer1'
import LoadingSpinner from '../components/LoadingSpinner'
import { Context } from '../context/Context'
import { useLogin } from '../supabase/useLogin'
import AdminLogin from './AdminLogin'

const ProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem('user'))

  const { role = undefined } = data?.user
  const { isLoading } = useLogin()
  if (role === undefined || role !== 'authenticated')
    return window.location.replace('/adminlogin')

  //   console.log(data, isLoading, isAuthenticated, isError)

  //   return isLoading ? (
  //     <>
  //       <LoadingSpinner />
  //       <Footer1 />
  //     </>
  //   ) : (
  //     <>{isAuthenticated ? <Outlet /> : <AdminLogin />}</>
  //   )

  return isLoading ? (
    <>
      <LoadingSpinner />
      <Footer1 />
    </>
  ) : (
    <Outlet />
  )
}

export default ProtectedRoute
