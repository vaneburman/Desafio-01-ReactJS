import React from 'react';
import Item from './Item';
import Box from '@material-ui/core/Box';

export default function ItemList(props) {

    console.log('este es el props.lista' + props.lista);
    console.log(props.lista)

    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper"
            >   
                <ul>
                    {props.lista.map(producto=>{
                        return(
                            <Box p={1} bgcolor="grey.300">
                                <Item producto={producto} />
                            </Box>
                        )
                    })}
                </ul>
            </Box>
        </div>
    )
}
