import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import App from "./App";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import './style.css'
import './App.scss'
import './components/review.css'

import About from './pages/About'
import Home from './Home'
import Navbar from './components/Navbar'
import Footer1 from './components/footer1'
import ServicePage from './pages/ServicePage'
import ProductList from './pages/ProjectPage'
import ScrollToTop from './components/ScrollToTop'
import Contacts from './pages/Contacts'
import SingleProductPage from './components/SingleProject'

// import "./index.css";
// import App from "./App";
// import Footer from "./components/Navbar/footer";
// import App1 from "./review";

function Main() {
  // let {id} = useParams()
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <section>
          <Navbar />
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/projects" element={<ProductList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects/:id" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main
