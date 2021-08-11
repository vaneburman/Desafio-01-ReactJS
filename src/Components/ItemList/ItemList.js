import React from 'react';
import Item from './Item';
import Box from '@material-ui/core/Box';

export default function ItemList({lista}) {

    console.log('este es el props.lista' + lista);
    console.log(lista)

    return (
        
                <ul>
                    <Box display="flex" flexDirection="row"  justifyContent="center" alignItems="center" flexWrap='wrap'>
                        {lista.map(producto=>{
                            return(
                                    <Item producto={producto} />
                            )
                        })}
                    </Box>
                </ul>
    )
}
