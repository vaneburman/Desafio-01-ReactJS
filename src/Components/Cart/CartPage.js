import Boton from './Boton';
import { Container } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';
import useCart from '../../Context/useCart';

export default function CartPage() {
    const { cart } = useCart();
    const columns = ['Producto', 'Categoria', 'Precio', 'Cantidad', '']

    return (
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
                                    <TableCell>{i.item.price}</TableCell>
                                    <TableCell>{i.quantity}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <Boton id={i.item.id} text={'Eliminar'} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </Container>
    )
}
