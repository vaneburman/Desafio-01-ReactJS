
import {useContext} from 'react';
import { CartContext } from '../../Context/CustomProvider'

// import useCart from '../../Context/useCart';

export default function CartPage() {
    const { cart } = useContext(CartContext);
    const columns = ['Producto', 'Categoria', 'Precio', 'Cantidad', '']



    return (
        <table style={{ border: '1px solid black'}}>
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
                                    <td> Eliminar </td>
                                    {/* <Botones data = {['Activo', 'Editar', 'Eliminar']} /> */}
                            </tr>
                        )}
                    )
                }
            </tbody>
        </table>
    )
}
