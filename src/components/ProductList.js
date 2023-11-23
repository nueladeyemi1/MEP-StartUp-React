import React from 'react'
import GridView from '../components/GridView'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../components/projects_context'
import LoadingSpinner from './LoadingSpinner'
import axios from 'axios'
import './project.css'
import { useProject } from '../supabase/useProject'
import { usePaginate } from '../supabase/usePaginate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getPaginate } from '../supabase/apiProjects'
import { useContext } from 'react'
import { Context } from '../context/Context'

const MAX_PER_PAGE = 10

const ProductList = () => {
  const queryClient = useQueryClient()
  const [currentPage, setCurrentPage] = useState(1)
  // const { currentPage, setCurrentPage } = useContext(Context)

  // useEffect(() => {
  //   queryClient.invalidateQueries({ queryKey: ['paginate'] })
  // }, [currentPage])

  ///HANDLING PAGINATION

  // const { mutate, data: paginatedData, isLoading } = useMutation({
  //   mutationKey: ['paginate'],
  //   mutationFn: (currentStart, currentEnd) =>
  //     getPaginate(currentStart, currentEnd),

  //   onSuccess: () => queryClient.invalidateQueries(),
  // })

  // const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useProject()

  const currentStart = (currentPage - 1) * MAX_PER_PAGE
  const currentEnd = currentStart + MAX_PER_PAGE
  const PAGES = Math.ceil(data?.length / 10)

  // const { paginatedData, isLoading } = usePaginate(currentStart, currentEnd)

  // const PAGES = 2

  // console.log(PAGES, currentStart, currentEnd)

  // useEffect(() => {
  //   mutate(currentStart, currentEnd)
  //   console.log(currentStart, currentEnd)
  // }, [currentStart, currentEnd])

  function handleNext() {
    // queryClient.invalidateQueries({ queryKey: ['paginate'] })
    if (currentPage < PAGES) setCurrentPage((page) => page + 1)
  }

  function handlePrev() {
    // mutate(currentStart, currentEnd)
    // queryClient.invalidateQueries({ queryKey: ['paginate'] })

    if (currentPage > 1) setCurrentPage((page) => page - 1)
  }

  // console.log(isLoading, paginatedData)

  if (isLoading) return <LoadingSpinner />

  return (
    <>
      {data?.length < 1 ? (
        <h5 style={{ textTransform: 'none', textAlign: 'center' }}>
          Sorry, no projects available now.
        </h5>
      ) : (
        <table>
          <thead>
            <th>S/N</th>
            <th>PROJECTS</th>
            <th>SERVICES</th>
            <th>CLIENTS/ACHITECT</th>
            <th>PROJECT STATUS</th>
            <th>FULL DESCRIPTION</th>
          </thead>
          {data?.slice(currentStart, currentEnd)?.map((projectData) => {
            const {
              id,
              project_name,
              services,
              client,
              project_status,
            } = projectData

            return (
              <tbody key={id}>
                <td>{id}</td>
                <td>{project_name}</td>
                <td>{services}</td>
                <td>{client}</td>
                <td>{project_status}</td>
                <td>
                  <Link to={`/projects/${id}`}>View Details</Link>
                </td>
              </tbody>
            )
          })}
          {/* {console.log(project, id, name, client, feature)} */}
        </table>
      )}
      {/* <GridView key={project.id} products={project} /> */}
      {data?.length < 10 ? (
        ''
      ) : (
        <div className='pagination'>
          {/* {Array.from({ length: PAGES }, (_, index) => {
          return <button>{index + 1}</button>
        })} */}

          <button onClick={handlePrev} className='btn admin-btn'>
            Prev
          </button>
          <button onClick={handleNext} className='btn admin-btn'>
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default ProductList
