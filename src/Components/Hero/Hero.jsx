import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
           <h1>We ensure better education for a better world</h1>
           <p>our cutting-edge curriculm is design to empower students with the knowlwdge , skill and the experience nedded to excel in the dynamice filds of education</p>
           <button className='btn'> Explore more <img src={dark_arrow} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Hero