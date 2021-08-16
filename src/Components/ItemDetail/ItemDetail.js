import Box from '@material-ui/core/Box';
import React, {useState} from 'react';
import ItemCount from '../ItemList/ItemCount';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function ItemDetail({detail}) {

    console.log('esta es la prop de itemdetail')
    console.log(detail)
    const [unidades, setUnidades] = useState()

    const onAdd = (cantidad) => {
        console.log("State Uplifting")
        console.log("Recibi la cantidad de un componente hijo")
        console.log(cantidad)
        setUnidades(cantidad)
        console.log(unidades)
    }

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
                        
                        {!!unidades ? 
                            <>
                                <Link to='/cart'>
                                    <Button variant="contained" color='primary' style={{backgroundColor: '#34A512'}} > 
                                        Terminar mi compra 
                                    </Button>
                                </Link>
                            </>
                            
                            :

                            <ItemCount id={detail.id} stock={detail.stock} initial={0} onAdd={onAdd} />
                        }
                    </div>
                }
            </Box>
        )
}
