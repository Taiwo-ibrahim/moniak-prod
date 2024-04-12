import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const [navToggle, setNavToggle] = useState(false)

  const toggleNav = () =>  {
    setNavToggle(!navToggle)
  }


  return (
    <div className='navbar__container'>
      <div className='navbar__container-logo'>
        <Link to="/"><img src="/logo.png" alt="logo-image" /></Link>
      </div>
      <div className='navbar__container-link'>
        <NavLink className='nav-link' to="/about">About</NavLink>
        <NavLink to="/services" className='nav-link'>Services</NavLink>
        <NavLink className='nav-link' to="/projects">Projects</NavLink>
        <NavLink className='nav-link' to="/contact">Contact</NavLink>
      </div>
      <div className='navbar__container-responsive'>
        <div className='navbar__container-responsive-logo'>
          <Link to="/"><img src="/logo.png" alt="logo-image" /></Link>
        </div>
        <div onClick={toggleNav} className='navbar__container-responsive_hamburger'>
          <img src="/hamburger.png" alt="hamburger" />
        </div>
      </div>
      <div className={navToggle? 'navbar__container-responsive-links' : "navbar__container-responsive-nolinks"}>
        <NavLink className='nav-link' to="/about">About</NavLink>
        <NavLink to="/services" className='nav-link'>Services</NavLink>
        <NavLink className='nav-link' to="/projects">Projects</NavLink>
        <NavLink className='nav-link' to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar