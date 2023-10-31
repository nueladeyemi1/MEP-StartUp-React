import React from 'react'
import Footer1 from '../components/footer1'
import styled from 'styled-components'
import ProductList from '../components/ProductList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ProductsPage = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <PageHero title='products' /> */}
        {/* <Wrapper className='page'> */}
        <div className='section-center section-center-table products'>
          <ProductList />
        </div>
        {/* </Wrapper> */}
        <section>
          <Footer1 />
        </section>
      </QueryClientProvider>
    </>
  )
}

// const Wrapper = styled.div`
//   .products {
//     display: grid;
//     gap: 3rem 1.5rem;
//     margin: 4rem auto;
//   }
//   @media (min-width: 768px) {
//     .products {
//       // grid-template-columns: 200px 1fr;
//     }
//   }
// `

export default ProductsPage
