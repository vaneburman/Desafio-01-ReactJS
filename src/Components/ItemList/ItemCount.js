import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  



export default function ItemCount(props) {

    
    //para los estilos
    const classes = useStyles();
    const caja = {
        width: '4rem',
        textAlign: "center"}

    //para actualizar y controlar el contador de productos    
    
    const [Count, setCount] = useState(props.initial);


    //defino las funciones que voy a usar para el contador y para los botones
    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('La Cantidad supera el stock disponible');
        }
    }

    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        } else {
            alert('¿Eliminar item del carrito?'); 
            setCount(0);
                }
}
    const Confirmar = () => {
        if(props.stock > 0){
            props.onAdd(Count)
        }
    }
        
    
    //acá dispongo que el componente me muestre un solo botón si aún no agregué items al contador, y que me despliegue el contador propiamente dicho cuando ya tenga al menos un item para agregar al carrito.

    if(Count === props.initial & props.stock > 0){
    return (
        <div className={classes.root}>
            <Button onClick={sumarContador} variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>Agregar</Button>
        </div>
        
    )
    } else if (Count === props.initial & props.stock === 0){
        return( 
        <div className={classes.root}>
            <Button variant="contained" disable > Sin Stock </Button>
        </div>
        )
    }
    else {
        return(
            <div className={classes.root}>
                <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
                        <Button onClick={restarContador} size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>-</Button>

                        <p style={caja}>{Count}</p>
                        
                        <Button onClick={sumarContador} size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>+</Button>
                </div>
                <div>
                    <Button onClick={Confirmar} variant="outlined" style= {{color: '#34A512', borderColor: '#34A512'}} onClick={props.onAdd}>Confirmar</Button>
                </div>
            </div>
        )
    }
}