import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useCart from '../../Context/useCart';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const { cart, totalPrice } = useCart();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        El resumen de tu compra
      </Typography>
      <List disablePadding>
        {cart.map((i) => (
          <ListItem className={classes.listItem} key={i.item.id}>
            <ListItemText primary={i.item.title} secondary={`${i.quantity} unidad/es`} />
            <Typography variant="body2">${i.item.price * i.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {totalPrice}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}