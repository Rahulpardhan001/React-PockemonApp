import React from "react";
import Pockemon from "./Pockemon";

function PockemonCard(props) {
  const { pokemon } = props;
  // console.log(pokemon);
  const BaseExperience = pokemon.base_experience;
  const Abilities = pokemon.abilities.map(ability => ability.ability.name).join(', '); 

  return (
    <div className="mycards col-xl-3 col-md-4 col-sm-6 col-12">
      <div className="card  border mb-4 p-4 shadow-lg p-3 mb-5 border-0 bg-warning">
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top  shadow-lg p-3 rounded-circle pock-img"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center fa-wand-magic ">{pokemon.name}</h5>
          <p className="text-center">base_experience:  {BaseExperience}</p>
          <div className="d-flex justify-content-between pb-1">
          <span className="card-text fw-bolder rounded">Weight: {pokemon.weight}</span>
          <span className="card-text fw-bolder rounded">Height: {pokemon.height}</span>
          </div>
       
          <p className="bg-success text-light rounded p-2 abilities">Abilities: {Abilities}</p>
          
        </div>
      </div>
    </div>
  );
}

export default PockemonCard;
