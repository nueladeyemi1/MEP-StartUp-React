import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './style.css'
import './App.scss'
import './components/review.css'
import Footer from './components/footer'
import Footer1 from './components/footer1'
import Review from './components/review'
import Services from './components/Services'
import { ProductsProvider } from './components/projects_context'
import FeaturedProjects from './components/FeaturedProjects'
import Section1 from './components/SectionService1'
import { Dashboard } from './components/TheCarousel'
import FeaturesTiles from './components/mepservices/FeaturedServices'
import About from './pages/About'

// import "./index.css";
// import App from "./App";
// import Footer from "./components/Navbar/footer";
// import App1 from "./review";

function Main() {
  return (
    <>
      <BrowserRouter>
        <section>
          <Navbar />
        </section>
        <Dashboard />
        <ProductsProvider>
          <FeaturedProjects />
        </ProductsProvider>
        {/* <Footer /> */}
        <section>
          <Services />
          <br />
          <br />
        </section>
        {/* <Section1 /> */}
        <FeaturesTiles />
        <section className='container reduce__review'>
          <div className='title'>
            <h2>our reviews</h2>
          </div>
          <div className='underline'></div>
          <Review />
        </section>
        <section>
          <Footer1 />
        </section>
        <BrowserRouter>
          <Routes>
            <Route exact path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </BrowserRouter>
    </>
  )
}

export default Main
