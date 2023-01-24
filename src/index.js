import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import App from "./App";
import { BrowserRouter, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import './style.css'
import './App.css'
import './components/review.css'
import Footer from './components/footer'
import Footer1 from './components/footer1'
import Review from './components/review'
import Services from './components/Services'
import { ProductsProvider } from './components/projects_context'
import FeaturedProjects from './components/FeaturedProjects'
import Section1 from './components/SectionService1'
import { Dashboard } from './components/TheCarousel'

// import "./index.css";
// import App from "./App";
// import Footer from "./components/Navbar/footer";
// import App1 from "./review";

function Main() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>

      <ProductsProvider>
        <FeaturedProjects />
      </ProductsProvider>

      {/* <Footer /> */}
      <section>
        <Services />
        <br />
        <br />
      </section>

      <Section1 />

      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
        </div>
        <div className='underline'></div>
        <Review />
      </section>

      <section>
        <Footer1 />
      </section>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Main />)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
