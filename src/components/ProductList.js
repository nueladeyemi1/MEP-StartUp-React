import React from "react";
import GridView from "../components/GridView";
import { useState, useEffect } from "react";
import { fetchProducts } from "../components/projects_context";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

const ProductList = () => {
  const [status, setStatus] = useState([]);

  const [project, setProject] = useState([]);

  const apiCall = async function () {
    try {
      let response = await axios.get(
        "https://mep-backend2-production.up.railway.app/api/v1/list/"
      );

      setProject(response.data)
      setStatus(response.request.status)
      
    } catch (error) {
      if(status !== 200) {
        return <>...Error in loading Project {error}</>
      }
    }
  }

  useEffect(() => {

    apiCall()

    setTimeout(()=>{
      setIsLoading(false)
    } ,3000)
  }, []);
 
const [isLoading, setIsLoading] = useState(true);

if (isLoading && status === 200) {
  return <LoadingSpinner />;
}

  if (project === undefined || project.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no projects available now.
      </h5>
    );
  }

  return (
    <>
      <GridView key={project.id} products={project} />
    </>
  );
};

export default ProductList;
