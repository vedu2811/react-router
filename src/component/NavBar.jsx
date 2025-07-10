import React from 'react'
import router from '../assets/router.png'

const NavBar = () => {
  return (
    <div>
        <img src={router} alt=""/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar