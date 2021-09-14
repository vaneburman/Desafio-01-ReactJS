import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const CartWidget = ()=> {
    
    return(
    <>
        <Link to='/cart' style={{color: 'white'}}>
            <ShoppingCartOutlinedIcon />
        </Link>
        
    </>
    )
}
export default CartWidget