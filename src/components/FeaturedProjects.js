import React, { useState, useEffect } from "react";
// import { initialState } from "./projects_context";
import { useProductsContext } from "./projects_context";
import { initialState } from "./projects_context";
import { Link, Router, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Project";
import { fetchProducts } from "./projects_context";

const FeaturedProjects = () => {
  const featuredProject = [];
  const newFeaturedProject = [];
  const navigate = useNavigate();

  const [callApi, setCallApi] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => setCallApi(response));
  }, []);

  

  try {
    callApi.forEach((prod) => {
      if (prod.feature === true) {
        prod.description = "";
        featuredProject.push(prod);
      }
    });
  } catch (error) {
    
  }


                {/* </div> */}
  // var bucket = [];

  // for (let i = 0; featuredProject.length <= 10; i++) {
  //   bucket.push(i);
  // }

  // function getRandomFromBucket() {
  //   var randomIndex = Math.floor(Math.random() * featuredProject.length);
  //   if (featuredProject.splice(randomIndex, 1)[0] !== undefined) {
  //     newFeaturedProject.push(featuredProject.splice(randomIndex, 1)[0]);
  //   }
  // }

  // getRandomFromBucket();

  //

  // let sample = 0;

  // while (sample <= 10) {
  //   const randomNumber = Math.floor(Math.random() * featuredProject.length);
  //   if (!newFeaturedProject.includes(featuredProject[randomNumber])) {
  //     newFeaturedProject.push(featuredProject[randomNumber]);
  //     console.log(newFeaturedProject);
  //   }
  //   sample++;
  // }

  ///

  // do {
  //   const randomNumber = Math.floor(Math.random() * featuredProject.length);
  //   if (!newFeaturedProject.includes(featuredProject[randomNumber])) {
  //     newFeaturedProject.push(featuredProject[randomNumber]);
  //     console.log(newFeaturedProject);
  //   }

  //   sample++;
  // } while (sample <= 10);

  // console.log(newFeaturedProject, featuredProject, featuredProject.length);

  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {/* {console.log(initialState.featured_products)} */}

        {/* /// */}

        {featuredProject.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
        {/* /// */}

        {/* {initialState.featured_products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })} */}
      </div>

      <button
        onClick={() => {
          navigate("/projects");
        }}
        className="btn projectBTN"
      >
        view all projects
      </button>
    </Wrapper>
  );
};

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
`;

export default FeaturedProjects;
