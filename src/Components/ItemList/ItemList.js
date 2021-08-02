import React from 'react';
import Item from './Item';
import Box from '@material-ui/core/Box';

export default function ItemList(props) {

    console.log('este es el props.lista' + props.lista);
    console.log(props.lista)

    return (
        
                <ul>
                    <Box display="flex" flexDirection="row"  justifyContent="center" alignItems="center" alignContent= 'space-between' p={1} m={1}>
                    {props.lista.map(producto=>{
                        return(
                                <Item producto={producto} />
                        )
                    })}
                    </Box>
                </ul>
    )
}
