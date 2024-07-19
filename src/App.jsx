import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import HeroSection from './Components/HeroSection'
import Card from './Components/Card'
import CardWrapper from './Components/CardWrapper'

function App() {


  return (
    <div className='main-wrapper'>
     <HeroSection/>
     <CardWrapper/>
     </div>
  )
}

export default App
