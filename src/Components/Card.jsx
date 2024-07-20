
import "../styles/card.css";
import pokemon from "../assets/Eevee _ Pokemon.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
   const navigate = useNavigate()

   const navigateToDetailsPage = ()=>{
    navigate('/pokemondetails')
   }

  const [isHovered, setIsHovered] = useState(false);
useState
  return (
   <div
      className='card-container'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={navigateToDetailsPage}
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
         <p>Weight: 40kg</p>
         <p>Height: 65</p>
         <p>Type: Fire</p>
        </div>
      )}
    </div>
  );
};

export default Card;
