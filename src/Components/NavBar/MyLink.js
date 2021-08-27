import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import ListItem from './ListItem';
import PrivateLinks from './PrivateLinks';

const MyLink = () => {

    const [open, setOpen] = React.useState(false);


      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }


    return(
        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
            <ListItem />
            <PrivateLinks />
        </MenuList>
    )

    }
export default MyLink