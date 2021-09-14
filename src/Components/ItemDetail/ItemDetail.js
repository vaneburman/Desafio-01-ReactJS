import { useState } from 'react';
import ItemCount from '../ItemList/ItemCount';
import {Link} from 'react-router-dom';
import useCart from '../../Context/useCart';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Button} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
   
     paper: {
         padding: theme.spacing(1),
         width: '50%',
         [theme.breakpoints.down('sm')]: {
             width: '100%',
             maxWidth: 320,
           },
       },
      link:{
        color: 'white',
        textDecoration: 'none'
    },
    button: {
        backgroundColor: '#34A512',
        margin: '0 auto',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            margin:  theme.spacing(2),
            },
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
            <Grid item xs={12} justifyContent="center" align='center'>
                {(detail.id) && 
                    <Paper className={classes.paper} >
                        <img src={detail.pictureURL} alt='Imagen del producto' style={{width: '100%'}}/>
                        <h1> {detail.title} </h1>
                        <p style={{fontSize: '16px'}}>{detail.description}</p>
                        <h3> Precio: ${detail.price} </h3>
                        
                        {!!unidades ? 
                            <>
                                <Link to='/' className={classes.link}>
                                    <Button variant="contained" size='small' color='primary' className={classes.button} onClick={agregarItems} > 
                                        Agregar al carrito 
                                    </Button>
                                </Link>
                                <Link to='/cart' className={classes.link}>
                                    <Button variant="contained" size='small' color='primary' className={classes.button} onClick={agregarItems} > 
                                        Terminar compra 
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
