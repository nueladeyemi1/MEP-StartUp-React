import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./projects_reducer";
import { products_url as url } from "./servicessubgroup";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

// axios.defaults.baseURL = 'http://127.0.0.1:8000'
// axios.defaults.baseURL = "http://34.122.156.210:8000";
// axios.defaults.headers = {
//   "Content-Type": "multipart/form-data",
// };

export const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};



export const fetchProducts = async () => {
  // dispatch({ type: GET_PRODUCTS_BEGIN });
  let response;
  try {
    // response = await axios.get("http://34.122.156.210:8000/api/v1/list/");
    response = await axios.get(
      "https://mep-backend2-production.up.railway.app/api/v1/list/"
    );
    let product = response.data;
    return product;

   
  } catch (error) {
  
  }
};

///////////////////
let trial;

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;

      // const products = response.data.map((product) => {
      //   const { id, fields } = product;
      //   const {
      //     name,
      //     featured,
      //     price,
      //     colors,
      //     company,
      //     description,
      //     category,
      //     shipping,
      //     images,
      //   } = fields;
      //   const { url } = images[0];
      //   return {
      //     id,
      //     name,
      //     featured,
      //     price,
      //     colors,
      //     company,
      //     description,
      //     category,
      //     shipping,
      //     image: url,
      //   };
      // });

      // console.log(products);

      // return {
      //   statusCode: 200,
      //   body: JSON.stringify(products),
      // };

      // dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      ///////////////////////////////////////

      // initialState.products.push(...products);
      // console.log(products, initialState.products);

      // if (products.length > 1) {
      //   const featured_limit = [];

      //   function getRandomArbitrary(min, max) {
      //     return Math.floor(Math.random() * (max - min) + min);
      //   }

      //   while (featured_limit.length < 4) {
      //     let rands = getRandomArbitrary(
      //       0,
      //       initialState.featured_products.length
      //     );
      //     // console.log(rands)
      //     featured_limit.push(initialState.featured_products[rands]);
      //   }

      //   // console.log(featured_limit)
      // }

      // products.map((singleProd) => {
      //   if (singleProd.feature === true) {
      //     initialState.featured_products.push(singleProd);
      //   }
      // });

      ////////////////////////////////////

      // console.log(initialState.featured_products)

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);
  // fetchProducts('http://127.0.0.1:8000/api/v1/list/')

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
