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
                        <p>Item: {detail.id} {detail.title}</p>
                        <img src={detail.pictureURL} alt='Imagen del producto' />
                        <h1> {detail.title} </h1>
                        <p style={{fontSize: '16px'}}>{detail.description}</p>
                        <h3> Precio: ${detail.price} </h3>
                        <ItemCount id={detail.id} stock={detail.stock} initial={0} />
                    </div>
                }
            </Box>
        )
}
