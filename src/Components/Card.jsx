
import "../styles/card.css";
import pokemon from "../assets/Eevee _ Pokemon.jpeg";
import { useState } from "react";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
useState
  return (
    <div
      className='card-container'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text">
        <span id="number">#1</span>
        
      </div>
      <div className={`image-container ${isHovered ?'card-hover' : ''}`}>
        <img src={pokemon} />
      </div>
      {isHovered && (
        <div className="hovered">
         <p className='character-name'>Crabominable</p>
         <p>Weight: 40</p>
         <p>Height: 65</p>
        </div>
      )}
    </div>
  );
};

export default Card;
