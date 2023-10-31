import React from 'react'
import GridView from '../components/GridView'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../components/projects_context'
import LoadingSpinner from './LoadingSpinner'
import axios from 'axios'
import './project.css'
import { useProject } from '../supabase/useProject'

const ProductList = () => {
  const { isLoading, data } = useProject()
  // console.log(data, 'yes')

  // const [status, setStatus] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  const [project, setProject] = useState([])

  ////

  // const apiCall = async function() {
  //   try {
  //     // setIsLoading(true)
  //     const response = await axios.get(
  //       'https://mep-backend2-production.up.railway.app/api/v1/list/'
  //     )

  //     const data = await response.data

  //     setProject(data)
  //     setStatus(data.status)
  //     // setIsLoading(false)
  //   } catch (error) {
  //     if (status !== 200) {
  //       return <>...Error in loading Project {error}</>
  //     }
  //   }
  // }

  // useEffect(() => {
  //   apiCall()
  // }, [])

  ///

  // if (isLoading === 'false') {
  //   return <LoadingSpinner />
  // } else {
  //   return (
  //     <h5 style={{ textTransform: 'none' }}>
  //       Sorry, no projects available now.
  //     </h5>
  //   )
  // }

  // const { id, name, feature, client } = project[0]

  return (
    <>
      {isLoading === true ? (
        <LoadingSpinner />
      ) : data?.length < 1 ? (
        <h5 style={{ textTransform: 'none' }}>
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
          {data?.map((projectData) => {
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
    </>
  )
}

export default ProductList
