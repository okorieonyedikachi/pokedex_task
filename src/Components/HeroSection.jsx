import React from 'react'
import '../styles/heroSection.css'
import background from '../assets/_.jpeg'

const HeroSection = () => {
  return (
    <div className='container' >
        <img src={background} className='image'/>
    </div>
  )
}

export default HeroSection

// style={{backgroundImage: `url(${background})` }}