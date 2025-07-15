import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {

  const {id} = useParams()

  return (
    <div>
        <h1>Id is: {id}</h1>
    </div>
  )
}

export default JobDetails