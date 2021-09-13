import {useState} from 'react';
import Boton from '../Cart/Boton';
import { Container, Button, Grid } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';
import useCart from '../../Context/useCart';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OrdenContainer from '../Cart/OrdenContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Checkout from '../Cart/Checkout';

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        width: '90%', 
        // margin: 50 
    },
    link:{
        color: 'white',
    },
    button: {
        backgroundColor: '#34A512',
        margin: '0 2rem',
        [theme.breakpoints.down('sm')]: {
            margin:  theme.spacing(2),
            },
    },
    root: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
        padding: theme.spacing(0, 6, 0, 1) ,
        [theme.breakpoints.down('sm')]: {
            padding:  theme.spacing(0, 0, 0, 6),
            },
      },

        appBarSpacer: theme.mixins.toolbar
          
      }
))


export default function CartPage() {
    const { cart } = useCart();
    const classes = useStyles()


    if(cart.length > 0){
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.root}>
                        <Grid container justify = "center" align='center' spacing={8}> 
                            <Grid item xs={12} >
                                <Checkout />
                            </Grid>
                        </Grid>
                    </Container>
                </>
        )
    } else {
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Grid container justify = "center">   
                        <Container maxWidth="lg" className={classes.content}>
                            <h1> Carrito Vacío </h1>
                            <Link to='/' style={{color: 'white'}}>
                                <Button variant="contained" color='primary' className={classes.button}>
                                    Volver al inicio  <AiOutlineHome />
                                </Button>
                            </Link> 
                        </Container>
                    </Grid>
            </>
        )
    }
    
}
