import { useState } from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import zicadlogo from './img/zicadLogo.jpg'
import '../styles/navbar.css'
zicadlogo = zicadlogo

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className='navigation'>
      {/* <img src="{zicadlogo}" alt="" style={{ width: "30px", height: "30px" }} /> */}
      <a href='/' className='brand-name'>
        Zicad
      </a>
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/ServicePage'>Services</Link>
          </li>
          <li>
            <Link to='/ProjectPage'>Projects</Link>
          </li>
          {/* <li>
            <a href='/contact'>Career</a>
          </li> */}
          <li>
            <Link to='/Contacts'>Contact</Link>
          </li>
        </ul>
      </div>
      {/* <Routes>
        <Route path='/about' element={<About />} />
      </Routes> */}
    </nav>
  )
}
