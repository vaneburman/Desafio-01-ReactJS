import {useEffect} from 'react';
import Boton from '../Cart/Boton';
import { Container, Button, Grid } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';
import useCart from '../../Context/useCart';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        width: '90%', 
    },
    link:{
        color: 'white',
        textDecoration: 'none'
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
    const { cart, totalCart, totalPrice } = useCart();
    const columns = ['Producto', 'Categoria', 'Precio', 'Cantidad', '']
    const classes = useStyles()

    useEffect(() => {
        totalCart()
    }, [cart])

    if(cart.length > 0){
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.root}>
                        <Grid container justify = "center" align='center' spacing={8}> 
                            <Grid item xs={12} >
                                <Boton text={'Vaciar Carrito'} /> 
                            </Grid>
                            <Grid item xs={12} >
                                <TableContainer component={Paper} className={classes.tablecontainer}>
                                        <Table size="small" aria-label="a dense table" >
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map(col => (<TableCell>{col}</TableCell>))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {cart.map(i => (
                                                    <TableRow key={i.item.id}>
                                                        <TableCell>{i.item.title}</TableCell>
                                                        <TableCell>{i.item.category}</TableCell>
                                                        <TableCell>$ {i.item.price}</TableCell>
                                                        <TableCell>{i.quantity}</TableCell>
                                                        <TableCell>
                                                            <IconButton>
                                                                <Boton id={i.item.id} text={'Eliminar'} />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>Precio Total: $ {totalPrice}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                                <Grid item xs={12} sm={5} md={6} lg={4}>
                                    <Link to='/' className={classes.link}>
                                        <Button variant="contained" color='primary' className={classes.button}>
                                            Seguir Comprando
                                        </Button>
                                    </Link>
                                    <Link to='/checkout' className={classes.link}>
                                        <Button variant="contained" color='primary' className={classes.button}>
                                            Checkout
                                        </Button>
                                    </Link>
                                </Grid>
                        </Grid>
                    </Container>
                </>
        )
    
    } else {
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.root}>
                        <Grid container justify = "center" align='center' spacing={8}>   
                            <Grid item xs={12} >
                                <Typography variant='h6'> Carrito Vacío </Typography> 
                            </Grid>
                            <Grid item xs={12} >
                                <Link to='/' className={classes.link}>
                                    <Button variant="contained" color='primary' className={classes.button}>
                                        Volver al inicio 
                                        <HomeOutlinedIcon />
                                    </Button>
                                </Link> 
                            </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
    
}
