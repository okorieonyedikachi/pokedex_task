import React, { useState, useEffect } from "react";
import "../styles/cardWrapper.css";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL } from "../constants/index";

const CardList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(POKEMON_API_URL);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchField, setSearchField] = useState('');

  const pokemonFunc = async () => {
    setLoading(true);
    setPokemonData([]); 
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const pokemonList = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, pokemonList.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokemonFunc();
  }, [url]);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchField)
  );




  return (
    <div className="mainContainer">
      <input id="search-input" placeholder="Enter Pokemon name ..." value={searchField} onChange={(e)=> setSearchField(e.target.value)}/>
      <div className="card-wrapper">
        <Card pokemon={filteredPokemon} loading={loading} />
      </div>
      <div className="pagination-wrapper">
        {prevUrl && <button
          className="button"
          onClick={() => {
            console.log("prev");
            setPokemonData([]);
            setUrl(prevUrl);
          }}
        >
          Prev
        </button>}
        {nextUrl && <button
          className="button"
          onClick={() => {
            console.log(nextUrl)
            // setPokemonData([]);
            setUrl(nextUrl);
          }}
        >
          Next
        </button>}
      </div>
    </div>
  );
};

export default CardList;
