import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import SinCopete from './SinCopete';
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';


const NavBar = () =>{

  
    return(
      <AppBar position='static' style={{ backgroundColor: '#C73966'}}>
        <Toolbar>
          <div style={{ width: '100%' }}>
            <Box p={1} style={{display:'flex', alignItems:'center'}}>
              <Box p={1} width="100%" style={{display:'flex', alignItems: 'center'}} >
                <SinCopete />
                <Link to='/category/mesa' style={{textDecoration:'none', color: 'white', fontSize: '1.1rem', marginRight: '1rem'}}>Juegos de Mesa</Link>
                <Link to='/category/didacticos' style={{textDecoration:'none', color: 'white', fontSize: '1.1rem', marginRight: '1rem'}}>Juegos Didácticos</Link>
              </Box>
              <Box p={1} flexShrink={1} >
                <CartWidget />
              </Box>
            </Box>
          </div>   
        </Toolbar>
      </AppBar>
       )
    
}
export default NavBar