import React from 'react'
import './styles/App.css'
import CardList from './components/CardList'
import HeroSection from './components/HeroSection'


function App() {
  return (
    <div  className='main-wrapper'> 
    <HeroSection/>
    <CardList/>
   </div>
  )
}

export default App
