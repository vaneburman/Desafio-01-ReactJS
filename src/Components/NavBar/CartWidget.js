import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';





const CartWidget = ()=> {
    
    return(
    <>
        <Link to='/cart' style={{color: 'white'}}>
            <AiOutlineShoppingCart />
        </Link>
        
    </>
    )
}
export default CartWidget