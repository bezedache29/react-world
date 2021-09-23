import React from 'react';

const Card = (props) => {

  // Destructuring - Cela evite de faire props.game a chaque fois
  const { game } = props
  
  return (
    <li className="card">
      <img src={game.image} alt="tof" />
      <div className="data-container">
        <ul>
          <li>{game.character}</li>
          <li>Serie : {game.gameSeries}</li>
          <li>Amiibo : {game.amiiboSeries}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;