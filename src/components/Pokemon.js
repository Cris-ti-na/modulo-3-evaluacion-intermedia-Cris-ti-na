import React from 'react';

const Pokemon = props => {
    console.log(props.pokemon);

    const typesLi = props.pokemon.types.map ((type, index) => {
        return (
            <li key={index}>
                {type}
            </li>
        );
    });

    return (
        <div>
            <h2>{props.pokemon.name}</h2>
            <img src={props.pokemon.url} alt="props.pokemon.name" />
            <ul>{typesLi}</ul>
        </div>
    );
};

export default Pokemon;