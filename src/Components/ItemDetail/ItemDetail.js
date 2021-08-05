import Box from '@material-ui/core/Box'
import React from 'react'
import ItemCount from '../ItemList/ItemCount'

export default function ItemDetail({detail}) {

    console.log('esta es la prop de itemdetail')
    console.log(detail)

    //condicional para que no me renderice vacío y solo lo haga cuando haya producto cargado.
        return (
            <Box display='flex' justifyContent='center'>
                {(detail.id) && 
                    <div>
                        <p> Carga de prueba del detalle del producto </p>
                        <img src={detail.pictureURL} alt='Imagen del producto' />
                        <h1> {detail.title} </h1>
                        <h2>{detail.description}</h2>
                        <h3> Precio: ${detail.price} </h3>
                        <ItemCount id={detail.id} stock={detail.stock} />
                    </div>
                }
            </Box>
        )
}
