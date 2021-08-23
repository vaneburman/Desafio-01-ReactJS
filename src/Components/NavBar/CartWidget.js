import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';





const CartWidget = ()=> {
    
    return(
    <>
        <Link to='/cart' style={{color: 'white'}}>
            <AiOutlineShoppingCart fontSize='large' />
        </Link>
        
    </>
    )
}
export default CartWidget