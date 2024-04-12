import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Services.css"

function Services() {
  return (
    <div className='services__container'>
      <div className='services__container-navbar'>
        <Navbar />
      </div>

      <div className='services__container-about'>
        <img src="/services1.png" alt="" />
        <div className='services__container-about_text'>
          <h1>About Us</h1>
          <h2>Who we are</h2>
          <p>
            Moniak is a customer focused construction support company with over seven years experience in offering a unique and comprehensive range of support solutions to construction industries across Nigeria. We handle support operations ranging from Personnel management Logistics management Construction planning (from Preconstruction, Construction and Post construction stage) Direct Labor hire Sourcing and Leasing of Plant and Equipment Supply of building materials and a host of other construction support functions in totality and have partners experienced . Moniak (Nigeria) Limited has extensive expertise and are involved with firms having pool of experts across the globe who ensures the delivery of quality projects. Moniak Project & construction Delivery and Implementation managers work personally with each client throughout the duration of the project to ensure that clients meet their project goals and budgets.
          </p>
        </div>
      </div>

      <div className='services__container-offer'>
        <div className='services__container-offer_left'> 
          <h1>What we offer</h1>
          <div className='services__container-offer_lists'>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Construction planning</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Project Management/Consultancy</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Logistics Management & Direct Labor</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Sourcing and Leasing of Plant and Equipment</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Installation of Electrical/Mechanical equipment</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Civil Engineering Construction & Management;</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Sourcing and Leasing of Plant and Equipment</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Sourcing, Supplies, Sales and installation of Medical Equipment</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Civil Engineering Construction, Roads, Water works, Dams, building</p>
            </div>
            <div className='services__container-offer_bullet'>
              <img src='/check.png' alt="" />
              <p>Supply of building materials and a host of other construction support functions in totality</p>
            </div>
          </div>
        </div>
        <div className='services__container-offer_right'>
          <img src="/services11.png" alt="new ic" />
        </div>
      </div>

      <div className='services__container-mission'>
        <div className='services__container-mission_card'>
          <h1>Our Mission</h1>
          <p>''To deliver world class Infrastructure Engineering Construction Implementation & Delivery support services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards''</p>
          <img src="/services2.png" alt="" />
        </div>
        <div className='services__container-mission_card'>
          <h1>Our Vision</h1>
          <p>“Globally setting a tradition of excellent Construction Implementation & Delivery Support services that continually exceeds customer expectations"</p>
          <img src="/services3.png" alt="" />
        </div>
      </div>

      <div className='services__container-achievements'>
        <div className='services__container-achievements_card'>
          <img src="/services4.png" alt="" />
          <div className='services__container-achievements_text'>
            <h1>7 Years+</h1>
            <small>In Business</small>
          </div>
        </div>
        <div className='services__container-achievements_card'>
          <img src="/services5.png" alt="" />
          <div className='services__container-achievements_text'>
            <h1>30+</h1>
            <small>Completed Projects</small>
          </div>
        </div>
        <div className='services__container-achievements_card'>
          <img src="/services6.png" alt="" />
          <div className='services__container-achievements_text'>
            <h1>25+</h1>
            <small>Clients Worldwide</small>
          </div>
        </div>
        <div className='services__container-achievements_card'>
          <img src="/services7.png" alt="" />
          <div className='services__container-achievements_text'>
            <h1>300</h1>
            <small>Active Workers</small>
          </div>
        </div>
      </div>


      <div className='services__container-team'>
        <h3>The Team</h3>
        <h1>Meet our Leaders</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <div className='services__container-team_cards'>
          <div className='services__container-team_cards-1'>
            <img src="/services8.png" alt="" />
            <div className='services__container-team_cards-1_text'>
              <h4>Toks Akingbade</h4>
              <h5>Managing Director</h5>
            </div>
          </div>
          <div className='services__container-team_cards-1'>
            <img src="/services9.png" alt="" />
            <div className='services__container-team_cards-1_text'>
              <h4>Toks Akingbade</h4>
              <h5>Managing Director</h5>
            </div>
          </div>
          <div className='services__container-team_cards-1'>
            <img src="/services10.png" alt="" />
            <div className='services__container-team_cards-1_text'>
              <h4>Toks Akingbade</h4>
              <h5>Managing Director</h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Services