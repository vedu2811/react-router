import React from 'react'
import router from '../assets/router.png'
// import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate=useNavigate();

  return (
    <div className='navbar'>
        <img src={router} alt="" className='img'/>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Product</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
        <button onClick={() => navigate('/about', {replace:true})}>Get Started</button>
    </div>
  )
}

export default NavBar