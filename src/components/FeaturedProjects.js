import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Product from './Project'
import { useProject } from '../supabase/useProject'
import LoadingSpinner from './LoadingSpinner'

const FeaturedProjects = () => {
  const navigate = useNavigate()

  const { isLoading, data } = useProject()

  function getRandomElements(arr, numElements) {
    const shuffledArray = arr?.sort(() => Math.random() - 0.5)
    return shuffledArray?.slice(0, numElements)
  }

  // usage:
  const randomElements = getRandomElements(data, 3)

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Projects</h2>
        <div className='underline'></div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : data?.length < 1 || !data ? (
        <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Sorry, there is an error Loading projects currently.
        </div>
      ) : (
        <>
          <div className='section-center featured'>
            {// data?.slice(0, 3)
            randomElements?.map((product) => {
              return <Product key={product.id} {...product} />
            })}
          </div>
          <button
            onClick={() => {
              navigate('/projects')
            }}
            className='btn projectBTN'
          >
            view all projects
          </button>
        </>
      )}
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
