import { useState } from 'react';
import ItemCount from '../ItemList/ItemCount';
import {Link} from 'react-router-dom';
import useCart from '../../Context/useCart';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Button, Container , Typography, Divider} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';






const useStyles = makeStyles((theme) => ({
   root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
     },
    
  },
  details: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  content: {
    flex: '0 0 auto',
    justifyContent: 'start-end',
    paddingtop: theme.spacing(12),
    
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(3)
     },
  },
  text: {
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
     },
  },
  cover: {
    textAlign: 'center',
    margin: '1rem',
    width: '85%',
    height: '35rem',
    minHeight: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        maxWidth: 500,
        height: '15%',
        objectFit: 'cover'
     },
  },

      link:{
        color: 'white',
        textDecoration: 'none',
        margin: 3
    },
    button: {
        backgroundColor: '#34A512',
        margin: '0 auto',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            margin:  theme.spacing(2),
            },
    },
    confirm: {
        display: 'flex',
        flexDirection: 'column'
     },

    }
   
))

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
            <>
                {(detail.id) && 

                    <Card className={classes.root}>
                        
                        <CardMedia
                            className={classes.cover}
                            image={detail.pictureURL}
                            title='Imagen del producto'
                        />
                        <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4" className={classes.text}> {detail.title} </Typography>
                            <Divider />
                            <Typography component="h6" variant="h6" color="textSecondary" className={classes.text} >{detail.description}</Typography>
                            <Divider />
                            <Typography component="h4" variant="h4" className={classes.text}> Precio: ${detail.price} </Typography>
                        </CardContent>  
                        <div className={classes.buttons}>  
                        {!!unidades ? 
                            <div className={classes.confirm}>
                                <Link to='/' className={classes.link}>
                                    <Button variant="contained"  color='primary' className={classes.button} onClick={agregarItems} > 
                                        Agregar al carrito 
                                    </Button>
                                </Link>
                                <Link to='/cart' className={classes.link}>
                                    <Button variant="contained"  color='primary' className={classes.button} onClick={agregarItems} > 
                                        Terminar compra 
                                    </Button>
                                </Link>
                            </div>
                            
                            :

                            <ItemCount id={detail.id} stock={detail.stock} initial={0} onAdd={onAdd} />
                        }
                        </div>
                        </div>
                    </Card>
                // </Paper>
                }
             {/* </Grid> */}
            </>
        )
}


