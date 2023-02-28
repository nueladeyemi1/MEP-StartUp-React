import React, { useState } from "react";
import styled from "styled-components";
const ProjectImages = ({images}) => {

  const [main, setMain] = useState([images]);
  console.log(images)
  return (
    <Wrapper>
      <img src={images} alt="" className="main " />
      <div className="gallery">
        {main.map((image, index) => {
          return (
            <img
              src={images}
              alt=""
              key={index}
              //   className={`${image.url === main.url ? "active" : null}`}
              onClick={() => setMain([images])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 500px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProjectImages;
