import React, { useState, useEffect } from "react";
import "../styles/cardWrapper.css";
import Card from "./Card";
import Pagination from './Pagination'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {POKEMON_API_URL} from '../constants/index'




const CardList = () => {

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokemonFunc = async () => {
    setLoading(true)
    const res = await axios.get(POKEMON_API_URL )
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous )
    getPokemon(res.data.results)
    setLoading(false)
  }

  const getPokemon = async(res) => {
    res.map
  }

  useEffect(() => {
    pokemonFunc()
  }, [POKEMON_API_URL])
  



  return (
    <div className="mainContainer">
      <input id="search-input" placeholder="Enter Pokemon name ..." />
      <div className="card-wrapper">
        
        {/* { data && data.result.map((pokemon) => (
          <div>{data.name}</div>
          // <Card pokemonName={pokemon.name}/>
        ))} */}
      </div>
      <Pagination/>
    </div>
  );
};

export default CardList;
