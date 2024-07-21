import React, { useState, useEffect } from "react";
import "../styles/cardWrapper.css";
import Card from "./Card";
import axios from "axios";
import { POKEMON_API_URL } from "../constants/index";

const CardList = ({item}) => {

  const [searchField, setSearchField] = useState('');
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState(POKEMON_API_URL);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);
  
  
  
   useEffect(() => {
      const fetchPokemonData = async () => {
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
          const data = await response.data.results;
          setPokemon(data);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
        }
      };
      fetchPokemonData();
    }, []);
    
  // console.log(pokemon)
  
  const filteredPokemon = pokemon.filter(poke =>
    poke.name.toLowerCase().includes(searchField)
  );


  return (
   
    <div className="mainContainer">
      <input id="search-input" placeholder="Enter Pokemon name ..." value={searchField} onChange={(e)=> setSearchField(e.target.value)}/>
      <div className="card-wrapper">
        <Card pokemon={filteredPokemon}/>
      </div>
      <div className="pagination-wrapper">
        <button
          className="button"
        >
          Prev
        </button>
         <button
          className="button" 
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardList;
