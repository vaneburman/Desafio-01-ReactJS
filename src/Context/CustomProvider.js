import React, { createContext, useState, useEffect } from 'react'


export const CartContext = createContext();
const { Provider } = CartContext; 

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => {
        return cart.some(obj => obj.item.id === id)
    }
    
    
    const addItem = (item) => {
        if(isInCart(item.item.id)){
            let index = cart.findIndex((obj => obj.item.id == item.item.id));
            let cartItem = cart[index];
            cartItem.quantity = cartItem.quantity + item.quantity
            cart.splice(index, 1, cartItem);
            setCart([...cart]);
        } else {
            setCart([...cart, item])
        }
}

    const removeItem = (itemID) => {
        console.log('remove item')
    }

    const clear = () => {
        setCart([])
    }

    
    const ContextValue = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart
    }
 

    return (
        <Provider value = {ContextValue}>
            {children}
        </Provider>

    )
}


export default CustomProvider