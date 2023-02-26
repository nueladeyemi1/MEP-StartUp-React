import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { Link } from "react-router-dom";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          const { id, image, name, price, description } = product;
          return (
            <>
              <Project key={product.id} {...product} />
              {/* <div> */}
              {/* <h4>{name}</h4> */}
              {/* <p>{description.substring(0, 150)}...</p>
                <Link
                  to={`/products/${id}`}
                  style={{ backgroundColor: "blue", padding: "0.5rem 2.5rem" }}
                  className="btn"
                >
                  Details
                </Link>
              </div> */}
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
