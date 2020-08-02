import React from 'react';

const Pokelist = (props) => {
    console.log(props.list);
    //return <div>Soy un listado</div>;

    const listli = props.list.map(() => {
        return <li>Hola</li>;
    })

    return (
        <div>
            {listli}
        </div>
    )
};

export default Pokelist;