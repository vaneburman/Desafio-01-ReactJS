import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

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
            <MenuItem onClick={handleClose} className={link.cName} redireccion={link.url}>
                    {link.titulo}
            
            </MenuItem>
                    
            )
        }
    )
    return(
        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
            {ListItems}
        </MenuList>
    )

    }
export default MyLink