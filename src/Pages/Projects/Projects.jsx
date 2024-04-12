import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Projects.css"

function Projects() {
  return (
    <div className='projects__container'>
      <section className='projects__container-navbar'>
        <Navbar />
      </section>

      <section className='projects__container-hero_texts'>
        <h1>Our Projects</h1>
        <p>From commercial buildings to residential developments, our construction company takes pride in delivering excellence, ensuring every project is a true testament to our commitment to quality and client satisfaction.</p>
      </section>  

      <div className="projects__container-skyline">
        <div className='projects__container-skyline_top'>
          <h1>Skyline Haven Residence </h1>
          <p>Elevating Living Standards with Modern Design and Unparalleled Comfort.</p>
        </div>
        <div className='projects__container-skyline_bottom'>
          <img src="/projects2.png" alt="" />
          <img src="/projects2.png" alt="" />
          <img src="/projects2.png" alt="" />
          <img src="/projects2.png" alt="" />
        </div>
      </div>

      <div className='projects__container-quote'>
        <button>Get a quote <span><img src="/arrow.png" /></span> </button>
      </div>

      <div className='projects__container-quotes'>
        <img src="/quote1.png" />
        <div className='projects__container-quotes-text'>
          <p>"</p>
          <h3>From commercial buildings to residential developments, our construction company takes pride in delivering excellence, ensuring every project is a true testament to our commitment to quality and client satisfaction.</h3>
        </div>
        <h2>Toks Akingbade</h2>
        <h4>Kano, Nigeria</h4>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Projects




{/* 
      <div className='projects__container-button'>
        <button><Link to="/projects/construction" className='sub-route-button'>Construction</Link></button>
        <button><Link to="/projects/construction" className='sub-route-button'>Design</Link></button>
        <button><Link to="/projects/construction" className='sub-route-button'>Architecture</Link></button>
        <button><Link to="/projects/construction" className='sub-route-button'>Rails</Link></button>
         
      </div>

      <div>
        <Outlet />
      </div> */}