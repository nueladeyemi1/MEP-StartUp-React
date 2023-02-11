import React from 'react'
// import { initialState } from "./projects_context";
import { useProductsContext } from './projects_context'
import { initialState } from './projects_context'
import { Link, Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Project'

const FeaturedProjects = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Projects</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {console.log(initialState.featured_products)}
        {initialState.featured_products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>

      <button href='/' className='btn projectBTN'>
        view all projects
      </button>
      {/* <Routes>
        <Route path='/about/*'>
          <Link to='/about' className='btn'>
            view all projects
          </Link>
        </Route>
      </Routes> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProjects
