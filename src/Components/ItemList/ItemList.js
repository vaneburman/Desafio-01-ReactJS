import React from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core';


export default function ItemList({lista}) {
 
    
        return (
        
            <ul>
                <Grid container spacing={8} >
                    {lista.map(producto=>{
                        return(
                                <Item producto={producto} />
                        )
                    })}
                </Grid>
            </ul>
        )
    }
    