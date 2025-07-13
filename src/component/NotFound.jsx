import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate=useNavigate();

  return (
    <div>
        <h2>404 | PAGE NOT FOUND</h2>
        <br />
        <button onClick={() => navigate('/')}>Go back to Home Page</button>
    </div>
  )
}

export default NotFound