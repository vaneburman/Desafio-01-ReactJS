import React from 'react';
import Item from './Item';
import Box from '@material-ui/core/Box';

export default function ItemList(props) {

    console.log('este es el props.lista' + props.lista);
    console.log(props.lista)

    return (
        <div>
                <ul>
                    {props.lista.map(producto=>{
                        return(
                                <Item producto={producto} />
                        )
                    })}
                </ul>
        </div>
    )
}
