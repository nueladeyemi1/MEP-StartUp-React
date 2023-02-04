import React from 'react'
// import { useFilterContext } from '../context/filter_context'
import GridView from '../components/GridView'
import ListView from '../components/ListView'
import { useProductsContext } from '../components/projects_context'
import { initialState } from '../components/projects_context'

console.log(initialState)

const ProductList = () => {
  //   const { filtered_products: products, grid_view } = useFilterContext()

  const { products, grid_view } = initialState

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products} />
}

export default ProductList
