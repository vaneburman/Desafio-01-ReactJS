import Boton from './Boton';
import { Container, Button } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';
import useCart from '../../Context/useCart';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CartPage() {
    const { cart } = useCart();
    const columns = ['Producto', 'Categoria', 'Precio', 'Cantidad', '']

    let precioTotal = cart.reduce((sum, value) => 
      (typeof value.item.price == "number" ? sum + value.item.price : sum),0)

    return (
        <>
        {(cart.length>0) ? 
        
            <Container>
                <TableContainer component={Paper} style={{ width: '90%', margin: 50 }}>
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
                    <Link to='/' style={{color: 'white'}}>
                        <Button variant="contained" color='primary' style={{backgroundColor: '#34A512'}}>
                            Seguir Comprando
                        </Button>
                    </Link> 
            </Container>
        :
        <Container> 
            <h1> Carrito Vacío </h1>
            <Link to='/' style={{color: 'white'}}>
                <Button variant="contained" color='primary' style={{backgroundColor: '#34A512'}}>
                    Volver al inicio  <AiOutlineHome />
                </Button>
            </Link> 
        </Container>
                                }
    </>
    )
}
