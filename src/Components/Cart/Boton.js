import { Button } from '@material-ui/core'
import React from 'react'
import useCart from '../../Context/useCart'

export default function Boton({id, text }) {
    const { removeItem, clear } = useCart();
    
    const accionBoton = ()=> {
        if(text === 'Eliminar'){
            removeItem(id)
        } else if (text === 'Vaciar Carrito'){
            clear()
        }
    }
    return (
       <Button variant="contained" size='small' color='primary' style={{backgroundColor: '#34A512'}} onClick={accionBoton}>{text}</Button>
    )
}
