import {useState} from 'react';
import Boton from '../Cart/Boton';
import { Container, Button, Grid } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';
import useCart from '../../Context/useCart';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OrdenContainer from '../Cart/OrdenContainer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        width: '90%', 
        margin: 50 
    },
    link:{
        color: 'white'
    },
    button: {
        backgroundColor: '#34A512'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      },
      appBarSpacer: theme.mixins.toolbar,
}))


export default function CartPage() {
    const { cart } = useCart();
    const columns = ['Producto', 'Categoria', 'Precio', 'Cantidad', '']
    const [checkout, setCheckout] = useState(false)
    const classes = useStyles()

    let precioTotal = cart.reduce((sum, value) => 
      (typeof value.item.price == "number" ? sum + value.item.price : sum),0)

    const handleCheckout = ()=>{
        setCheckout(true)
    } 

    if(cart.length > 0){
        return (
            <>
                    <div className={classes.appBarSpacer} />
                        <Grid container justify = "center">   
                            <Container maxWidth="lg" className={classes.content}>
                                <TableContainer component={Paper} className={classes.tablecontainer}>
                                    <Boton text={'Vaciar Carrito'} />
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
                                                    <TableCell>Precio Total: $ {precioTotal}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Link to='/' className={classes.link}>
                                        <Button variant="contained" color='primary' className={classes.button}>
                                            Seguir Comprando
                                        </Button>
                                    </Link> 
                                    <Button variant="contained" color='primary' className={classes.button} onClick={handleCheckout}>Checkout</Button>
                                    {checkout &&
                                        <OrdenContainer total={precioTotal} />
                                    }
                                    
                            </Container>
                        </Grid>
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
