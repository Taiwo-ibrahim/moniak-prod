import React from 'react'
import "./Section.css"

function Section(props) {
  return (
    <div className={props.className}>
      <div className="section__container-left">
        <h1>{props.headText}</h1>
        <p>{props.paragraph}</p>
        <img src={props.imgSmall} alt="" />
      </div>
      <div className='section__container-right'>
        <img src={props.imgBig} alt="" />
      </div>
    </div>
  )
}

export default Section