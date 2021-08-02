import React from 'react';
import ItemCount from '../ItemList/ItemCount';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });

export default function Item({detalle}) {

    const classes = useStyles();

    console.log('este es el prop de item' + detalle)
    console.log(detalle)

    return (
        <Container maxWidth='lg'>
            <div>
                <img src={detalle.pictureURL} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="Imagen de producto" />
                <h1>{detalle.title}</h1>
                <p>{detalle.description}</p>
                <h2>Precio: $ {detalle.price}</h2>
                <ItemCount stock={detalle.stock} id={detalle.id} style={{margin: '0 auto'}} />
                        
            </div>
        </Container>
        
    )
    
}