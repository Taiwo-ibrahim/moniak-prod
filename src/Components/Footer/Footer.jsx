import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__container-section1'>
        <div className='footer__container-section1_container'>
          <p>Subscribe to our Quarterly Newsletter</p>
          <div className='footer__container-input'>
            <input placeholder='Enter your email address' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='footer__container-section2'>
        <div className='footer__container-section2-top'> 
          <div className='footer__column1'>
            <h1>Logo</h1>
    	      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
          </div>
          <div className='footer__column2'>
            <h1>Company</h1>
            <div className='footer__small'>
              <Link>Home</Link>
              <Link>Service</Link>
              <Link>Projects</Link>
              <Link>Contact Us</Link>
            </div>
          </div>
          <div className='footer__column2'>
            <h1>Services</h1>
            <div className='footer__small'>
              <h4>Construction</h4>
              <h4>Renovations</h4>
              <h4>Project management</h4>
              <h4>Engineering Design</h4>
            </div>
          </div>
          <div className='footer__column2'>
            <h1>Contact Us</h1>
            <div className='footer__small'>
              <h4>09066788675</h4>
              <h4>09066788675</h4>
              <h4>moniak@project.com</h4>
            </div>
          </div>
        </div>
        <div className='footer__container-section2-bottom'>
          <div className='footer__container-section2-bottom_content'>
            <p>Connect with us on social media</p>
            <div className='footer_social-links'>
              <img src="/facebook.png" alt="facebook" />
              <img src="/twitter.png" alt="facebook" />
              <img src="/instagram.png" alt="facebook" />
              <img src="/linkedIn.png" alt="facebook" />
            </div>
          </div>
          <div className='footer-line'>
            <hr/>
          </div>
        </div>
      </div>
      <div className='footer__container-section3'>
        <p>Copyright @ 2024:<span className='footer-email'>moniak@project.com.</span> All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer