import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

    const error=useRouteError();
    const navigate=useNavigate();

  return (
    <div className='jobDetails'>
        <h3>An error Occurred..</h3>
        <p>{error.message}</p>
        <button onClick={() => navigate('/')}>Go back to HomePage</button>
    </div>
  )
}

export default Error