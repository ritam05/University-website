import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import Play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about_img'/>
            <img src={Play_icon} alt="" className='Play_icon' onClick={()=>{
              setPlayState(true)
            }} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's leders today</h2>
            <p>At [University Name], we provide a diverse range of academic programs spanning graduate, postgraduate, and master's degrees, empowering students to pursue their educational aspirations at every level of their academic journey."</p>
            <p>"Discover limitless opportunities for academic advancement at [University Name], where our comprehensive curriculum caters to students seeking graduate, postgraduate, and master's degrees across a multitude of disciplines, ensuring a fulfilling and enriching educational experience for all."</p>
            
        </div>

    </div>
  )
}

export default About