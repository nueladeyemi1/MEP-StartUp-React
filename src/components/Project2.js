import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { formatPrice } from "../utils/helpers";
// import { FaSearch } from 'react-icons/fa'
// import { Link, Routes } from 'react-router-dom'

// import { CardMedia } from '@mui/material'

// import dust from '../component/img/'

const Project2 = ({ image, name, price, id, description }) => {
   
  return (
    <Wrapper>
      <div className="container-featured">{<img src={image} alt={name} />}</div>
      <footer>
        <h4>{name}</h4>
      </footer>
      <p>{description.substring(0, 150)}...</p>
      <Link
        to={`/projects/${id}`}
        // style={{textDecoration: "none", padding: "0.5rem 2.5rem"}}
        // className="btn"
      >
        View Details
      </Link>
     
{/*       
      <button className={`project__${id}`} onClick={() => {document
        .querySelector(`.project__${id}`)
        .addEventListener("click", function (e) {
          setProjectId(id)
        });}}>
    
        View Details
      </button> */}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    // width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
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
`;
export default Project2;
