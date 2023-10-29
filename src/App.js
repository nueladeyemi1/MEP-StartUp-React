import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import './style.css'
import './App.scss'
import './components/review.css'

import About from './pages/About'
import Home from './Home'
import Navbar from './components/Navbar'
import ServicePage from './pages/ServicePage'
import ProductList from './pages/ProjectPage'
import ScrollToTop from './components/ScrollToTop'
import Contacts from './pages/Contacts'
import SingleProductPage from './components/SingleProject'
import PageNotFFound from './PageNotFFound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Admin from './admin/Admin'
import AdminLogin from './admin/AdminLogin'
import ProtectedRoute from './admin/ProtectedRoute'
import { Context } from './context/Context'
import { useState } from 'react'

function Main() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const queryClient = new QueryClient()

  return (
    <>
      <Context.Provider
        value={{ username, setUsername, password, setPassword }}
      >
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollToTop />
            <section>
              <Navbar />
            </section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<ServicePage />} />
              <Route path='/projects' element={<ProductList />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/projects/:id' element={<SingleProductPage />} />
              <Route path='*' element={<PageNotFFound />} />

              <Route path='/adminlogin' element={<AdminLogin />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/admin' element={<Admin />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Context.Provider>
    </>
  )
}

export default Main
