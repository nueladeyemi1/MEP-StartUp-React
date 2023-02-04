import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './style.css'
import './App.scss'
import './components/review.css'

import About from './pages/About'
import Home from './Home'

// import "./index.css";
// import App from "./App";
// import Footer from "./components/Navbar/footer";
// import App1 from "./review";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main
