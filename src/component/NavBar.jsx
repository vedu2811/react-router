import React from 'react'
import router from '../assets/router.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={router} alt="" className='img'/>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Product</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar