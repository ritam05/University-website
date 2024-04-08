import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

function App() {
  const [playState,setPlayState]=useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Title subTitle=' Our Program' title='What we offer'/>
          <Program/>
          <About setPlayState={setPlayState}/>
          <Title subTitle=' Gallery' title='Campus photos'/>
          <Campus/>
          <Title subTitle=' Testimonials' title='What Student Says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

