import React from 'react'
import GridView from '../components/GridView'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../components/projects_context'
import LoadingSpinner from './LoadingSpinner'
import axios from 'axios'
import './project.css'

const ProductList = () => {
  const [status, setStatus] = useState([])

  const [project, setProject] = useState([])

  const apiCall = async function() {
    try {
      let response = await axios.get(
        'https://mep-backend2-production.up.railway.app/api/v1/list/'
      )

      setProject(response.data)
      setStatus(response.request.status)
    } catch (error) {
      if (status !== 200) {
        return <>...Error in loading Project {error}</>
      }
    }
  }

  useEffect(() => {
    apiCall()

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  if (isLoading && status !== 200) {
    return <LoadingSpinner />
  } else if ((project === undefined && status === 0) || project.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no projects available now.
      </h5>
    )
  }

  const { id, name, feature, client } = project[0]

  return (
    <>
      <table>
        <thead>
          <th>S/N</th>
          <th>PROJECTS</th>
          <th>SERVICES</th>
          <th>CLIENTS/ACHITECT</th>
          <th>PROJECT STATUS</th>
          <th>FULL DESCRIPTION</th>
        </thead>

        {project.map(({ id, name, services, client, project_status }) => {
          return (
            <tbody>
              <td>{id}</td>
              <td>{name}</td>
              <td>{services}</td>
              <td>{client}</td>
              <td>{project_status}</td>
              <td>
                <Link to={`/projects/${id}`}>View Details</Link>
              </td>
            </tbody>
          )
        })}

        {console.log(project, id, name, client, feature)}
      </table>
      {/* <GridView key={project.id} products={project} /> */}
    </>
  )
}

export default ProductList
