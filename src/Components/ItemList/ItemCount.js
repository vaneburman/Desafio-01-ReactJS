import React, {useState, useEffect} from "react";
import { useStore, useDispatch } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";
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
    //de los estados globales que voy a ir actualizando conforme se agreguen productos al carrito
    const store = useStore();
    const dispatch = useDispatch();
    
    //para los estilos
    const classes = useStyles();
    const caja = {
        width: '4rem',
        textAlign: "center"}

    //para actualizar y controlar el contador de productos    
    const { stock, id } = props;
    const [Count, setCount] = useState(0);

    //para ver si me agrega produtos al array products cuando cambia el estado Store.
    useEffect(() => {
        console.log(store.products)
    }, [store])

    //defino las funciones que voy a usar para el contador y para los botones
    const sumarContador = () => {
        if (Count < stock) {
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
    //Cuando confirmo y agrego el producto al carrito cambio el estado global y lo actualizo subiendo el id del producto y la cantidad.
    const agregarCarrito = () => {
            dispatch(
                { type: types.ADD_CART, payload: 
                { id: id, cantidad: Count } 
            }
            )
        }
        
    
    //acá dispongo que el componente me muestre un solo botón si aún no agregué items al contador, y que me despliegue el contador propiamente dicho cuando ya tenga al menos un item para agregar al carrito.

    if(Count === 0){
    return (
        <div className={classes.root}>
            <Button onClick={sumarContador} variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>Agregar</Button>
        </div>
        
    )
    } else {
        return(
            <div className={classes.root}>
                <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
                
                        <Button onClick={sumarContador} size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>+</Button>
                        <p style={caja}>{Count}</p>
                        <Button onClick={restarContador} size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>-</Button>
                </div>
                <div>
                    <Button onClick={agregarCarrito} variant="outlined" style= {{color: '#34A512', borderColor: '#34A512'}}>Agregar al Carrito</Button>
                </div>
            </div>
        )
    }
}