import React from "react";
import styled from "styled-components";
// import { formatPrice } from '../utils/helpers'
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <div className="grid__style">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{description.substring(0, 150)}...</p>
                <Link
                  to={`/products/${id}`}
                  style={{ backgroundColor: "blue", padding: "0.5rem 2.5rem" }}
                  className="btn"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  text-align: left;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article .grid__style {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      // grid-template-columns : repeat(auto-fit, minmax(360px, 1fr)
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
