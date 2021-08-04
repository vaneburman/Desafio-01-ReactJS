import React from 'react';
import ItemCount from './ItemCount';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box  from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });

export default function Item({producto}) {

    const classes = useStyles();

    return (
        <Box p={1}>
            <li key={producto.id}>
                <Card className={classes.root} style={{backgroundColor: 'whitesmoke'}}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={producto.pictureURL}
                            title={producto.title}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {producto.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {producto.description}
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="h3">
                                Precio: $ {producto.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                            <ItemCount stock={producto.stock} id={producto.id} style={{margin: '0 auto'}} />
                        </CardActions>
                </Card>
            </li>
        </Box>
    )
    
}
