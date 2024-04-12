import React, {useState} from 'react'
import "./App.css"
import Footer from './Components/Footer/Footer'
import Modal from './Components/Modal/Modal'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className='home__container'>
      <div className='home__container-navbar'>
        <Navbar />
      </div>

      <div className='home__container-hero_section'>
        <h1>CONSTRUCTION EXPLOITS AT IT’S FINEST</h1>
        <div className='home__container-hero_section-quote'>
          <div className='home__container-hero_section-quote_top'>
            <h2>We would love to work with you on your project</h2>
            <img src="/home_hero.png" alt="" />
            <h2>We create places that deserve to be lived with the highest quality materials and attention to detail</h2>
          </div>
          <div className='home__container-hero_section-quote_botton'>
            <button onClick={toggleModal}>Get a quote <span><img className='arrow-img' src="arrow.png" alt="" /></span></button>
          </div>
        </div>
        <div>
          {modal && <Modal toggleModal={toggleModal} />}
          
        </div>
      </div>

      <div className='home__container-features'>
        <div className='home__container-features_left'>
          <h1>Our Commitment to Sustainability.</h1>
          <h2>At Moniak , we take pride in our commitment to sustainable practices and environmental responsibility. As a forward-thinking company, we understand the importance of minimizing our ecological footprint and contributing to a greener future. Our sustainable initiatives encompass every aspect of our operations, from eco-friendly building materials to energy-efficient construction practices.</h2>
          <div className='home__container-features_left-list'>
            <h3>Key Features:</h3>  
            <div className='home__container-bullet_list'>
              <div className='home__container-bullet'>
                <img src='/check.png' alt="" />
                <p>
                  <span className='bullet-green'>Green Building Materials:</span> We prioritize the use of sustainable and recycled materials in our projects to reduce the environmental impact.
                </p>
              </div>

              <div className='home__container-bullet'>
                <img src='/check.png' alt="" />
                <p>
                  <span className='bullet-green'>Energy-Efficient Designs:</span> Our team incorporates energy-efficient design principles to optimize the use of natural resources and minimize energy consumption.
                </p>
              </div>

              <div className='home__container-bullet'>
                <img src='/check.png' alt="" />
                <p>
                  <span className='bullet-green'>Waste Reduction Strategies: </span> We implement comprehensive waste reduction strategies to minimize construction waste and promote responsible disposal practices.
                </p>
              </div>

              <div className='home__container-bullet'>
                <img src='/check.png' alt="" />
                <p>
                  <span className='bullet-green'>Community Engagement: </span> We actively engage with local communities to foster environmentally conscious practices and promote awareness of sustainable construction.
                </p>
              </div>
              
            </div>

          </div> 
            <h2>By choosing Moniak, you're not just selecting a construction partner – you're choosing a team committed to building a better and more sustainable future. Join us in creating structures that stand the test of time while preserving our planet for generations to come.</h2>
            <button>Request a demo</button>
        </div>

        <div className='home__container-features_right'>
          <img src="/features-img.png" alt="" />
        </div>
      </div>

      <div className='home__container-services'>
        <div className='home__container-services_top' > 
          <h2>Services</h2>
          <p>
            Welcome to Moniak, your partner in construction excellence. From groundbreaking designs to meticulous renovations, we offer a comprehensive range of services 
          </p>
        </div>
        <div className='home__container-services_bottom'>
          <h2>Construction</h2>
          <img src="/arrow2.png" alt="" />
        </div>
        <div className='home__container-services_bottom'>
          <h2>Renovation</h2>
          <img src="/arrow2.png" alt="" />
        </div>
        <div className='home__container-services_bottom'>
          <h2>Engineering Design</h2>
          <img src="/arrow2.png" alt="" />
        </div>
        <div className='home__container-services_bottom'>
          <h2>Project Management</h2>
          <img src="/arrow2.png" alt="" />
        </div>
      </div>

      <div className='home__container-recent'>
        <h3>RECENT PROJECTS</h3>
        <div className='home__container-recent_images'>
          <img src="/recent1.png" alt="" />
          <img src="/recent2.png" alt="" />
          <img src="/recent3.png" alt="" />
          <img src="/recent4.png" alt="" />
        </div>
      </div>

      <div className='home__container-trusted'>
        <h2>Trusted By</h2>
        <div className='home__container-trusted-images'>
          <img src="/trusted1.png" alt="" />
          <img src="/trusted2.png" alt="" />
          <img src="/trusted3.png" alt="" />
          <img src="/trusted4.png" alt="" />
          <img src="/trusted5.png" alt="" />
        </div>
      </div>

      <div className='home__container-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App