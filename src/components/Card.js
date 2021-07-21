import React from 'react';

function Card({ pokemon }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
      <div className="card">
        <img className="card-img" src={pokemon.sprites.front_default}/>
        <div className="card-name">
          {pokemon.name}
        </div>
      </div>
    </div>
  );
}

export default Card;
