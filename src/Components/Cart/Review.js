import React from 'react';
import useCart from '../../Context/useCart';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';


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

const Review = () => {
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

export default Review