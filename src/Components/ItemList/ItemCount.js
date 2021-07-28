import React, {useState, useEffect} from "react";
import { useStore, useDispatch } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";



export default function ItemCount(props) {

    const dispatch = useDispatch();
    const store = useStore()

    const { stock, id } = props;
    const [Count, setCount] = useState(0);

    
    useEffect(() => {
        console.log(store.products)
    }, [store])

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

    const agregarCarrito = () => {
            dispatch(
                { type: types.ADD_CART, payload: 
                { id: id, cantidad: Count } 
            }
            )
        }
        
    
    

    if(Count === 0){
    return (
        <>
            <button onClick={sumarContador}>Agregar</button>
        </>
        
    )
    } else {
        return(
            <>
                <button onClick={sumarContador}>+</button>
                <p>{Count}</p>
                <button onClick={restarContador}>-</button>
                <button onClick={agregarCarrito}>Agregar al Carrito</button>
            </>
        )
    }
}