import React from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core';


export default function ItemList({lista}) {
 
    // const ultimosprod = lista.splice(-4)
    
        return (
        
            <ul>
                <Grid container spacing={4} >
                    {lista.map(producto=>{
                        return(
                                <Item producto={producto} />
                        )
                    })}
                </Grid>
            </ul>
        )
    }
    