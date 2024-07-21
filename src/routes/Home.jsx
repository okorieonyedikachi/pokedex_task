import React from 'react'
import '../styles/App.css'
import CardList from '../components/CardList.jsx'
import HeroSection from '../components/HeroSection.jsx'



const Home = () => {
  return (
    <div  className='main-wrapper'> 
   <HeroSection/>
    <CardList/>
  </div>
  )
}

export default Home