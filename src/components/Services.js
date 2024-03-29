import React from 'react'
import styled from 'styled-components'
import { services } from './servicessubgroup'
import './services.css'

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            MEP Engineering
            <br /> Consultancy services
          </h3>
          <p>
            We offer a wide range of MEP Engineering Consultancy services in the
            construction industry, which cuts across the Hospitality and
            Recreation, Educational, Religious, Residential, Commercial, Oil and
            Gas, Telecommunications, Agriculture, Industrial and manufacturing,
            medical and Food Processing sectors of the economy
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text, list } = service

            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
                <p>
                  <ul style={{ listStyle: 'none' }}>
                    {list.map((lists, index) => (
                      <li key={index}>
                        <div>{lists}</div>
                      </li>
                    ))}
                  </ul>
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-10);
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
