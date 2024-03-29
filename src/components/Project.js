import React from 'react'
import styled from 'styled-components'

const Project = ({ image, name }) => {
  return (
    <Wrapper>
      <div className='container-featured'>{<img src={image} alt={name} />}</div>
      <footer>
        <h5>{name}</h5>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    min-height: 25vh;
    min-width: 40vh;
    width: 100%;
    height: 450px !important;
    display: block;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  img:hover {
    cursor: pointer;
    filter: blur(90%);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }

  @media (min-width: 992px) {
    img {
      min-height: 25vh;
      min-width: 25vh;
      display: block;
      object-fit: cover;
      border-radius: var(--radius);
      transition: var(--transition);
    }
  }
`
export default Project
