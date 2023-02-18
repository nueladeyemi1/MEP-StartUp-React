import React from 'react'
// import { useFilterContext } from '../context/filter_context'
import GridView from '../components/GridView'
import ListView from '../components/ListView'
// import { useProductsContext } from '../components/projects_context'
import { useProductsContext } from '../components/projects_context'
import { useFilterContext } from './filter_context'
import { initialState } from '../components/projects_context'
import { useState, useEffect } from 'react'

console.log(initialState.products)

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  //   return <ListView products={initialState.products} />
  //   return <>{initialState.products}</>
  //   const [listProduct, setListProduct] = useState([]);
  //   const { grid_view } = initialState

  if (initialState.products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
        {console.log(initialState.featured_products)}
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={initialState.products} />
  }
  return <GridView products={initialState.products} />
}

export default ProductList
