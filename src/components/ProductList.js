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

console.log(initialState.products);

const ProductList = () => {
  const [callApi, setCallApi] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => setCallApi(response));
  }, []);

  ////

  // const { filtered_products: products, grid_view } = useFilterContext()

  // const { grid_view } = useFilterContext();

  ///

  //   return <ListView products={initialState.products} />
  //   return <>{initialState.products}</>
  //   const [listProduct, setListProduct] = useState([]);
  //   const { grid_view } = initialState

  console.log(callApi);

  if (callApi === undefined || callApi.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no projects available now.
      </h5>
    );
  }

  return (
    <>
      {/* <ListView products={callApi} />; */}
      <GridView products={callApi} />;
    </>
  );

  // if (grid_view === false) {
  //   return <ListView products={callApi} />;
  // }
  // return <GridView products={callApi} />;
};

export default ProductList;
