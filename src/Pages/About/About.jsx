import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Section from '../../Components/Section/Section'
import "./About.css"

function About(props) {
  return (
    <div className='about__container'>
      <div className='about__container-navbar'>
        <Navbar />
      </div>

      <div className='about__container-hero'>
        <h1>Our Services</h1>
        <p>Welcome to Moniak, your partner in construction excellence. From groundbreaking designs to meticulous renovations, we offer a comprehensive range of services tailored to your needs. At [Company Name], we don't just build structures; we create experiences.</p>
      </div>

      <div className='about__container-section'>
        <Section
          className = "section__container"
          headText = "Construction"
          paragraph = "Welcome to Moniak, where construction is not just a service; it's our commitment to crafting the extraordinary. Specializing in comprehensive construction solutions, we bring visions to life, from conceptualization to completion. With precision, innovation, and unwavering dedication, we build spaces that stand as testaments to quality and excellence. Choose Moniak for a construction experience that goes beyond the ordinary—where every project is a masterpiece in the making."
          imgSmall= "/about2.png"
          imgBig = "/about1.png"
        />
        <hr />
        <Section
          className = "section__container-2"
          headText = "Renovation"
          paragraph = "Transforming spaces into visions of excellence, Moniak excels not only in groundbreaking construction but also in meticulous renovations. Our expertise extends beyond building anew; we specialize in breathing fresh life into existing structures. Whether it's a revitalized office space, a modernized home, or a revamped commercial facility, [Company Name] is your trusted partner for seamless and stunning renovations. Elevate your space with us, where innovation meets craftsmanship."
          imgSmall= "/about4.png"
          imgBig = "/about3.png"
        />
        <hr />
        <Section
          className = "section__container"
          headText = "Engineering Design"
          paragraph = "Step into a world of innovative solutions with Moniak. Beyond construction, we pride ourselves on offering cutting-edge engineering design services. Melding creativity with scientific precision, our team navigates complexities to bring visionary concepts to life. At Moniak, we redefine what's possible in engineering design, shaping the future with solutions that blend functionality, efficiency, and unmatched expertise. Choose us for a transformative experience where every design is a testament to our commitment to excellence."
          imgSmall= "/about6.png"
          imgBig = "/about5.png"
        />
        <hr />
        <Section
          className = "section__container-2"
          headText = "Project Management"
          paragraph = "At Moniak, we not only build structures; we orchestrate success. With our specialized project management services, we navigate the complexities of every endeavor with precision and expertise. From conception to completion, our dedicated team ensures seamless coordination, timely delivery, and cost-effective solutions. Trust Moniak to be your project management partner, where every detail is meticulously handled, and every project is a testament to our commitment to excellence. Elevate your construction experience with us, where your vision is not just realized but optimized for success."
          imgSmall= "/about8.png"
          imgBig = "/about7.png"
        />
        
      </div>

      <div className='about__container-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default About

// the service page is termed about page because i made the mistake of putting the service page with contents of about page dont forget