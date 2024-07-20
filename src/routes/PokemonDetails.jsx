import React from "react";
import "../styles/pokemonDetails.css";
import photo from "../assets/Eevee _ Pokemon.jpeg";

const endpoints = [
  {id: 1, name: photo },
  {id: 2, name: photo },
  {id: 3, name: photo},
  {id: 4, name: photo},
]
const PokemonImage = (endpoint) => {
  return (
    <div className="sub-imagesContainer">
    {endpoints.map ((endpoint, id)=> (
    <img src={endpoint.name} className="sub-images"/>
    ))}
    </div>
  )
} 

const PokemonDetails = () => {
  return (
    <div className="main">
      <div className="detail-wrapper">
        <h1>Pokemon "Pikachu" Details </h1>
        <div className="sub-container">
          <div className="mainImage-container">
            <img src={photo} className="detail-image" />
          </div>
          <div>
            Description
          </div>
        </div>
            <PokemonImage />
      </div>
    </div>
  );
};

export default PokemonDetails;
