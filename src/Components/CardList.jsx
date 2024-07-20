import React from 'react'
import '../styles/cardWrapper.css'
import Card from './Card'

const PokemonList = [
  {id: 1, name:"Crabominable"},
  {id: 2, name:"Pikachu"},
  {id: 3, name:"Venusuar"},
  {id: 4, name:"Charizard"},

]

const CardList = () => {
  return (
    <div className='mainContainer'>
        <input id='search-input' placeholder='Enter Pokemon name ...'/>
        <div className='card-wrapper'>
          {PokemonList.map((pokemon, index)=> (
             <Card pokemonName={pokemon.name}/>
          ))}
        </div>
    </div>
  )
}

export default CardList