import React from 'react'
import '../styles/cardWrapper.css'
import Card from './Card'

const CardWrapper = () => {
  return (
    <div className='mainContainer'>
        <input id='search-input'></input>
        <div className='card-wrapper'>
            <Card/>
        </div>
    </div>
  )
}

export default CardWrapper