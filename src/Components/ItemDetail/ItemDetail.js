import {Grid, Paper} from '@material-ui/core';
import React, {useState} from 'react';
import ItemCount from '../ItemList/ItemCount';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import useCart from '../../Context/useCart';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    content:{
        display: 'flex',
        justifyContent: 'center' 
    },
    button: {
        backgroundColor: '#34A512'
    },
    paper: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
              maxWidth: 280,
          },
      }
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
            <Grid item xs={12} className={classes.content} >
                {(detail.id) && 
                    <Paper className={classes.paper} elevation={3}>
                        <img src={detail.pictureURL} alt='Imagen del producto' style={{width: '100%'}}/>
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
                    </Paper>
                }
            </Grid>
        )
}
