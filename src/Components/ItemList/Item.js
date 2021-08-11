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
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 200
    }
  });

export default function Item({producto}) {

    const classes = useStyles();

    return (
        <Box>
            <li key={producto.id} style={{listStyle: 'none', margin: '1rem', width: 300}}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={producto.pictureURL}
                        title={producto.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {producto.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography variant="body1" color="textPrimary" component="h3">
                            Precio: $ {producto.price}
                        </Typography>
                        <Button size="small" style={{backgroundColor: '#34A512', color: 'white'}}>
                            <Link to= {`/item/${producto.id}`} style={{textDecoration:'none', color:'white'}}>Ver más</Link>
                        </Button>
                    </CardActions>
                </Card>
            </li>
        </Box>
    )
    
}
