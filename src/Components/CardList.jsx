import React from 'react'
import '../styles/cardWrapper.css'
import Card from './Card'

const CardList = () => {
  return (
    <div className='mainContainer'>
        <input id='search-input' placeholder='Enter Pokemon name ...'/>
        <div className='card-wrapper'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default CardList