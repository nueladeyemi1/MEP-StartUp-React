import Review from './components/review'
import Services from './components/Services'
import { ProductsProvider } from './components/projects_context'
import FeaturedProjects from './components/FeaturedProjects'
import { Dashboard } from './components/TheCarousel'
import FeaturesTiles from './components/mepservices/FeaturedServices'
import Footer1 from './components/footer1'
import Regulator from './components/Regulator'
import Regulator2 from './components/Regulator2'

const Home = function() {
  return (
    <>
      <ProductsProvider>
        <Dashboard />
        <FeaturedProjects />
        <section>
          <Services />
          <br />
          <br />
        </section>

        <FeaturesTiles />

        <div style={{ marginBottom: '4rem' }}>
          {/* <Regulator /> */}
          <Regulator2 />
        </div>
        {/* <section className="container reduce__review">
          <div className="title">
            <h2>our reviews</h2>
          </div>
          <div className="underline"></div>
          <Review />
        </section> */}
        <section>
          <Footer1 />
        </section>
      </ProductsProvider>
    </>
  )
}

export default Home
