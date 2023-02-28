import React from "react";
import GridView from "../components/GridView";
import { useState, useEffect } from "react";
import { fetchProducts } from "../components/projects_context";

const ProductList = () => {
  const [callApi, setCallApi] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => setCallApi(response));
  }, []);
 
  if (callApi === undefined || callApi.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no projects available now.
      </h5>
    );
  }

  return (
    <>
      <GridView key={callApi.id} products={callApi} />
    </>
  );
};

export default ProductList;
