import React, {useMemo, forwardRef, useState} from 'react';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  }, 
  linkbtn: {
    textDecoration: 'none',
  }
}));

function ListItemLink(props) {

  const { icon, primary, to, nested = false } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderLink = useMemo(
    () => forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to],
  );
  
  const anidados = [
    {secondaryTitle: 'Juegos de Mesa',
    to: '/category/mesa'
    },
    {secondaryTitle: 'Juegos Didácticos',
    to: '/category/didacticos'
    }
  ]
  if(nested){
    return (
      <li>
        <ListItem button component={renderLink} onClick={handleClick}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ListItem component={renderLink}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {anidados.map(cat => {
                  return (
                    <ListItem button className={classes.nested}>
                        <Link to={cat.to} className={classes.linkbtn}>
                            <ListItemText primary={cat.secondaryTitle} />
                        </Link>
                    </ListItem>
                      )
                    })}
                    
              </List>
            </Collapse>
          </ListItem>
      </li>
    );
  }
  else {
    return(
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
    )
  }

}

export const NavBarListItems = (
  <div>
    <ListItemLink to="/" primary="Shop" icon={<StorefrontIcon />} nested secondary={['Juegos de Mesa', 'Juegos Didácticos']}/>
  </div>
);


export const SecondaryListItems = (
  <div>
    <ListSubheader inset>Cuenta</ListSubheader>
    <ListItemLink to="/" primary="Mis Datos" icon={<PeopleIcon />} />
    <ListItemLink to="/Cart" primary="Carrito" icon={<ShoppingCartIcon />} />
  
  </div>
);
