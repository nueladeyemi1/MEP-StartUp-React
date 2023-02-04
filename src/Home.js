import Footer from './components/footer'
import Footer1 from './components/footer1'
import Review from './components/review'
import Services from './components/Services'
import { ProductsProvider } from './components/projects_context'
import FeaturedProjects from './components/FeaturedProjects'
import Section1 from './components/SectionService1'
import { Dashboard } from './components/TheCarousel'
import FeaturesTiles from './components/mepservices/FeaturedServices'
import Navbar from './components/Navbar'

const Home = function() {
  return (
    <>
      <ProductsProvider>
        <section>
          <Navbar />
        </section>
        <Dashboard />

        <FeaturedProjects />

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
      </ProductsProvider>
    </>
  )
}

export default Home