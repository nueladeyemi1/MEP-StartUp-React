import React from 'react'
import Footer1 from './components/footer1'
import image from './component/img/undraw_warning.svg'
import { useNavigate } from 'react-router-dom'

const PageNotFFound = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
    console.log('it working')
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '4.8rem',
          marginBottom: '3.2rem',
          gap: '2.4rem',
        }}
      >
        <img style={{ maxWidth: '100%' }} src={image} alt='page not found' />
        <p style={{ color: 'red', fontWeight: '700' }}>
          Sorry! Something went wronng, this page cannot be found
        </p>
        <button
          style={{
            padding: '0.6rem 2.4rem',
            backgroundColor: '#3763B0',
            color: '#ffffff',
          }}
          onClick={(e) => {
            e.preventDefault()
            handleClick()
          }}
        >
          Go Home
        </button>
      </div>
      <Footer1 />
    </>
  )
}

export default PageNotFFound
