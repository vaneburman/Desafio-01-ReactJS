import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { NavLink } from 'react-router-dom';

const MyLink = (props) => {

    const anchorRef = React.useRef(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };

      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }

    const [open, setOpen] = React.useState(false);

    const ListItems = props.links.map((link) => {
        return(
            <MenuItem onClick={handleClose}>
                    <NavLink to={link.href} className={link.cName}>
                      {link.titulo}
                    </NavLink>
            
            </MenuItem>
                    
            )
        }
    )
    const ListItemsPrivate = props.privLinks.map((priv) => {
      return(
          <MenuItem onClick={handleClose}>
                  <NavLink to={priv.href} className={priv.cName}>
                    {priv.titulo}
                  </NavLink>
          
          </MenuItem>
                  
          )
      }
  )

    console.log(ListItems);
    console.log(ListItemsPrivate);

    return(
        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
            {ListItems}
            {ListItemsPrivate}
        </MenuList>
    )

    }
export default MyLink