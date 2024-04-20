import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Ferrari</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-feel'>Feel</li>
      </ul>
    </div>
  )
}

export default NavBar