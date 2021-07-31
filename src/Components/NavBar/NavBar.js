import React from 'react';
import CartWidget from './CartWidget';
import MyLink from './MyLink';
import SinCopete from './SinCopete';
import './NavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItems } from './MenuItems'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { PrivateLinks } from './PrivateLinks';

import { useStore } from "../../store/StoreProvider";




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const NavBar = () =>{
  //del estilo
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  //del estado global
  const { products } = useStore();

  const [open, setOpen] = React.useState(false);

  //En esta línea voy sumando la cantidad (de los objetos dentro del array de products) de todos los artículos que se agregan al carrito (estado global)
  let itemsTotales = products.reduce((sum, value) => (typeof value.cantidad == "number" ? sum + value.cantidad : sum), 0);
  //chequeo que me los haya sumado   
  console.log(itemsTotales);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  


    return(
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor: '#34A512'}}>

            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <div>
                  <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{color:'white'}}
                  >
                    <MenuIcon />
                  </Button>
                  <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                      <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                              <MyLink links={MenuItems} privLinks={PrivateLinks}/>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </IconButton>
              <Typography variant='h6' className={classes.title}>
                <SinCopete />
              </Typography>
              <Button color="inherit"><CartWidget /></Button>
              <p style={{fontSize: '1rem'}}>{itemsTotales}</p>
            </Toolbar>
          </AppBar>
        </div>
      );
    
}
export default NavBar