import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box  from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 300,
    },
  });

export default function Item({producto}) {

    const classes = useStyles();

    return (
        <Box p={1}>
            <li key={producto.id}>
                <Card className={classes.root} style={{backgroundColor: 'whitesmoke'}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                                    {producto.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardMedia
                            component="img"
                            image={producto.pictureURL}
                            title={producto.title}
                            height='150'
                            />
                    <Typography variant="body1" color="textSecondary" component="p">
                            {producto.description}
                    </Typography>
                    <CardActions style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <Typography variant="body1" color="textPrimary" component="h3">
                            Precio: $ {producto.price}
                        </Typography>
                        <Button size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>Ver más</Button>
                    </CardActions>
                </Card>
            </li>
        </Box>
    )
    
}
