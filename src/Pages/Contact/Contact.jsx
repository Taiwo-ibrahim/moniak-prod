import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact__container'>
      <div className='contact__container-navbar'>
        <Navbar />
      </div>

      <div className='contact__container-body'>
        <div className='contact__container-body_content'>
          <div className='contact-text'>
            <h1>Contact Us</h1>
            <p>Get in touch with our team today, we are here to listen and collaborate—contact our construction company today to discuss your project and turn your vision into reality.</p>
          </div>
          <form className='contact-form'>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <textarea>Message</textarea>
          </form>
        </div>
        <div className='contact__container-body_image'>
          <img src="/phone.png" alt="" /> 
          <img src="/mail.png" alt="" /> 
          <img src="/location.png" alt="" /> 
        </div>
      </div>

      <div className='contact__container-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact