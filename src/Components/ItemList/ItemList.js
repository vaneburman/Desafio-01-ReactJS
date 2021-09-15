import React from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core';




  

export default function ItemList({lista}) {

    
        return (
        
            <ul style={{listStylePosition: 'inside', paddingLeft: 12}}>
                <Grid container justifyContent="center" align='center' spacing={5} >
                    {lista.map(producto=>{
                        return(
                                <Item producto={producto} />
                        )
                    })}
                    </Grid>
            </ul>
        
        )
    }
    