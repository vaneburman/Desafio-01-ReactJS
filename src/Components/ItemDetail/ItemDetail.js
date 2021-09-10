import Box from '@material-ui/core/Box';
import React, {useState} from 'react';
import ItemCount from '../ItemList/ItemCount';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import useCart from '../../Context/useCart';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    box:{
        display: 'flex',
        justifyContent: 'center' 
    },
    button: {
        backgroundColor: '#34A512'
    },

}))

export default function ItemDetail({detail}) {

    const { addItem } = useCart()
    const [unidades, setUnidades] = useState()
    const classes = useStyles()
   
    const onAdd = (cantidad) => {
        setUnidades(cantidad)
        
    }

    const agregarItems = () => {
        const cartItem = { item: detail, 
            quantity: unidades
        }
        addItem(cartItem)
    }
 
        return (
            <Box className={classes.box}>
                {(detail.id) && 
                    <div>
                        <img src={detail.pictureURL} alt='Imagen del producto' />
                        <h1> {detail.title} </h1>
                        <p style={{fontSize: '16px'}}>{detail.description}</p>
                        <h3> Precio: ${detail.price} </h3>
                        
                        {!!unidades ? 
                            <>
                                <Link to='/cart'>
                                    <Button variant="contained" color='primary' className={classes.button} onClick={agregarItems} > 
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
