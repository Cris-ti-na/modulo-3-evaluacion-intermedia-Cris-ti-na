import React from 'react';
import Pokemon from './Pokemon';

const Pokelist = (props) => {
    //console.log(props.list);
    //return <div>Soy un listado</div>;

    const listli = props.list.map((pokemon) => {
        //console.log(pokemon);
        return (
            <li key={pokemon.id}>
                <Pokemon pokemon={pokemon}
                    //Si quiero traer uno a uno cada dato, puedo hacer esto
                    //name={pokemon.name}
                    //types={pokemon.types}
                    //image={pokemon.url}
                />
            </li>
        );
    })

    return (
        <div>
            {listli}
        </div>
    )
};

export default Pokelist;