import { Button } from '@material-ui/core'
import React from 'react'
import useCart from '../../Context/useCart';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#34A512' 
    }

}))

export default function Boton({id, text }) {
    const { removeItem, clear } = useCart();
    const classes = useStyles()
    
    const accionBoton = ()=> {
        if(text === 'Eliminar'){
            removeItem(id)
        } else if (text === 'Vaciar Carrito'){
            clear()
        }
    }
    return (
       <Button variant="contained" size='small' color='primary' className={classes.button} onClick={accionBoton}>{text}</Button>
    )
}
