import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from './projects_context'
import { single_product_url as url } from './servicessubgroup'
// import { Loading, Error, ProductImages } from "../components";
import Loading from './Loading'
import Error from './Error'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer1 from './footer1'
import ProjectImages from './ProjectImage'
import LoadingSpinner from './LoadingSpinner'
import { useSingleData } from '../supabase/useSingleData'

const SingleProductPage = () => {
  const { id } = useParams()

  const { data, isLoading } = useSingleData(Number(id))

  // console.log(data)

  // const navigate = useNavigate()

  // const [product, setProduct] = useState([])

  // This will handle the status of API Promise

  // const [status, setStatus] = useState(0)

  // const fetchProducts = async () => {
  //   let response
  //   try {
  //     response = await axios.get(
  //       `https://mep-backend2-production.up.railway.app/api/v1/get/${id}/`
  //     )
  //     let singleProduct = response.data

  //     setStatus(response.request.status)

  //     setProduct(singleProduct)
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   fetchProducts();
  //   // eslint-disable-next-line
  //   setTimeout(()=>{
  //     setIsLoading(false)
  //   },3000)
  // }, [id]);

  // This will handle the spinner

  // const [isLoading, setIsLoading] = useState(true)

  //This is initiated until a positive response is gotten
  // if (isLoading && status === 200) {
  //   return (
  //     <>
  //       <LoadingSpinner />
  //       <Footer1 />
  //     </>
  //   )
  // }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Wrapper>
          <div className='section section-center page'>
            <Link
              to='/projects'
              style={{
                backgroundColor: 'rgb(55, 99, 176)',
                padding: '0.5rem 5rem',
                borderRadius: 'none',
                color: 'white',
              }}
              className='btn'
            >
              back to projects
            </Link>
            <div className='product-center'>
              <ProjectImages images={data[0]?.image} />
              {/* <ProductImages images={images} /> */}
              <section className='content'>
                <h2> {data[0]?.project_name}</h2>
                <p className='desc'>
                  <span style={{ fontWeight: 700 }}>Description</span>:{' '}
                  {data[0]?.description}
                </p>
                <p className='info'>
                  <span>Project Number </span>: {data[0]?.id}
                </p>
                <hr />
              </section>
            </div>
          </div>
        </Wrapper>
      )}
      <Footer1 />
    </>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
