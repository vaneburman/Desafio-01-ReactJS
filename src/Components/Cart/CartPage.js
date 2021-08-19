
import {useContext} from 'react';
import { CartContext } from '../../Context/CustomProvider'
import Boton from './Boton';
import { Container } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';

// import useCart from '../../Context/useCart';

export default function CartPage() {
    const { cart } = useContext(CartContext);
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
            {/* <table style={{ border: '1px solid black'}}>
                <thead>
                    {columns.map(c => ( <th>{c}</th>))}
                </thead>

                <tbody>
                    {cart.map((l)=>{
                        return(
                                <tr key={l.item.id}>
                                        <td>{l.item.title}</td>
                                        <td>{l.item.category}</td>
                                        <td>{l.item.price}</td>
                                        <td>{l.quantity}</td>
                                        <Boton id={l.item.id} text={'Eliminar'}/>
                                </tr>
                            )}
                        )
                    }
                </tbody>
            </table> */}
        </Container>
    )
}
