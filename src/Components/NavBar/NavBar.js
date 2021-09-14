import {useState} from 'react';
import CartWidget from './CartWidget';
import { NavBarListItems, SecondaryListItems } from './NavBarListItems';
import SinCopete from './SinCopete';
import useCart from '../../Context/useCart';
import useOC from '../../Context/useOC';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Drawer, Typography, Divider, IconButton, Badge, List} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  appBar: {
      width: '100%',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                }),
      position: 'fixed'
      },
  appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
      },
  menuButton: {
    marginLeft: 3,
    marginRight: 36
  },
  
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(8) + 1,
    [theme.breakpoints.down('md')]: {
                width: theme.spacing(7) + 1,
          },
  },
   toolbar: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'flex-end',
     padding: theme.spacing(0, 3, 0, 0),
    ...theme.mixins.toolbar,
   },
  appBarSpacer: theme.mixins.toolbar,
}));

const NavBar = () =>{
    const {cart} = useCart();
    const {idOC} = useOC();
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const itemsTotales = cart.reduce((sum, value) => 
    (typeof value.quantity == "number" ? sum + value.quantity : sum),0)

  
    return(
      <div className={clsx(classes.root && classes.appBarSpacer)}>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              <SinCopete />
            </Typography>
            <IconButton color="inherit">
              {!idOC ? 
              ( <Badge badgeContent={itemsTotales} color="secondary">
                  <CartWidget />
                </Badge>
              ) : (
                <CartWidget />
              )
              }
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
            <List >
                {NavBarListItems}
            </List>                  
          <Divider />
          <Divider />
            <List>
              {SecondaryListItems}
            </List>                  
          <Divider />
        </Drawer>
      </div>
  );
}
export default NavBar