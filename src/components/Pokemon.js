import React from 'react';

const Pokemon = props => {
    console.log(props.pokemon);
    return (
        <div>
            <h2>{props.pokemon.name}</h2>
            <img src={props.pokemon.url} alt="props.pokemon.name" />
        </div>
    );
};

export default Pokemon;