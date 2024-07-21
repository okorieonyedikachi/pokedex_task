import React from 'react'
import { useState, useEffect} from 'react'
import '../styles/App.css'
import HeroSection from '../components/HeroSection'
import CardList from '../components/CardList'
import {POKEMON_API_URL } from '../constants/index'
import axios from 'axios'

const Home = () => {

  
  return (
    <div  className='main-wrapper'> <HeroSection/>
    <CardList/>
  </div>
  )
}

export default Home