import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';




const ListItem = ()=> {


    const anchorRef = React.useRef(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };


    const [open, setOpen] = React.useState(false);

    return(
        <>
            <MenuItem onClick={handleClose}>
                <NavLink to='/' className='nav-link'>
                   Inicio
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to='/About' className='nav-link'>
                  Quienes Somos
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to='/category/mesa' className='nav-link'>
                   Juegos de Mesa
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to='/category/didacticos' className='nav-link'>
                   Juegos didácticos
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to='/Contact' className='nav-link'>
                   Contacto
                </NavLink>
            </MenuItem>
        </>
                
        )

    }

    export default ListItem