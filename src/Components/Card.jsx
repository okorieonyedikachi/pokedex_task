import "../styles/card.css";
import pokemonPhoto from "../assets/Eevee _ Pokemon.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon, loading }) => {
  const navigate = useNavigate();

  const navigateToDetailsPage = () => {
    navigate("/pokemondetails");
  };

  const [isHovered, setIsHovered] = useState(false);
  useState;
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        pokemon.map((item, index) => {
          return (
            <div key={index}
              className="card-container"
              onClick={navigateToDetailsPage}
            >
              <div className="text">
                <span className="number">{item.name}</span>
              </div>
              <div
                className='image-container'
              >
                <img src={item.sprites.front_default} className="pokemon-image" />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
