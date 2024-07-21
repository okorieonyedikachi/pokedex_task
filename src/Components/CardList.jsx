import React, { useState, useEffect } from "react";
import "../styles/cardWrapper.css";
import Card from "./Card";
// import Pagination from './Pagination'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL } from "../constants/index";

const CardList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(POKEMON_API_URL);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokemonFunc = async () => {
    setLoading(true);
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
  }, [POKEMON_API_URL]);

  const prevButtonFn = () => {
    setPokemonData([]);
    setUrl(prevUrl);
  };

  const nextButtonFn = () => {
    setPokemonData([]);
    setUrl(nextUrl);
  };

  return (
    <div className="mainContainer">
      <input id="search-input" placeholder="Enter Pokemon name ..." />
      <div className="card-wrapper">
        <Card pokemon={pokemonData} loading={loading} />
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
