import React from "react";
// import { useFilterContext } from '../context/filter_context'
import GridView from "../components/GridView";
import ListView from "../components/ListView";
// import { useProductsContext } from '../components/projects_context'
import { useProductsContext } from "../components/projects_context";
import { useFilterContext } from "./filter_context";
import { initialState } from "../components/projects_context";
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

  // if (grid_view === false) {
  //   return <ListView products={callApi} />;
  // }
  // return <GridView products={callApi} />;
};

export default ProductList;
