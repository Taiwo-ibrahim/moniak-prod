import React from 'react'
import"./Modal.css"

function Modal(props) {
  return (
    <div className='modal__container'>
      <div className='modal__container-overlay' onClick={props.toggleModal}></div>
      <div className='modal__container-content'>
        <div className='modal__container-content_left'>
          <div className='modal__container-content_text'>
            <h1>Start Your Project with Us </h1>
            <p>Whatever your goal or project size, we will handle it using standards-compliant methods. We aim for your 100% satisfaction.</p>
          </div>
          <img src="/modal1.png" alt="" />
        </div>
        <div className='modal__container-content_right'>
          <h1>Fill out the form and we’ll be in touch as soon as possible.</h1>
          <form className='modal-form'>
            <div className='modal-form-input'>
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="email" />
            </div>
            <div className='modal-form-input'>
              <input placeholder="Telephone" type="number" />
              <input placeholder="Budget" type="number" />
            </div>
            <textarea placeholder='Tell us more about your project, needs and budget.'></textarea>
            <div className='modal-form-radio'>
              <input type="radio" id="option1" name="fruitGroup" value="apple" />
              <label for="option1">Yes, I’d like to receive occasional marketing emails from us. I have the right to opt out at any time. View privacy policy.</label>
            </div>
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal