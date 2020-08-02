import React from 'react';
import './pokemonCard.css';

const Pokemon = props => {
    console.log(props.pokemon);

    const typesLi = props.pokemon.types.map ((type, index) => {
        return (
            <li key={index} className={"card__types-" + type}>
                {type}
            </li>
        );
    });

    return (
        <div>
            <h2 className="card__title">{props.pokemon.name}</h2>
            <img className="card__image" src={props.pokemon.url} alt="props.pokemon.name" />
            <ul className="card__types">{typesLi}</ul>
        </div>
    );
};

export default Pokemon;