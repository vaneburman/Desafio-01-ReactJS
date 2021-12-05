import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const CartWidget = ()=> {
    
    return(
    <>
        <Link to='/cart' style={{color: '#34A512', filter: 'drop-shadow(-3px 0px 0px #E8E8E8)'}}>
            <ShoppingCartOutlinedIcon fontSize={'medium'}/>
        </Link>
        
    </>
    )
}
export default CartWidget