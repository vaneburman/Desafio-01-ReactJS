import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      verticalAlign: 'middle',
      transform: 'translateZ(0)',
      boxShadow: '0 0 1px rgba(0, 0, 0, 0.5)',
      backfaceVisibility: 'hidden',
      mozOsxFontSmoothing: 'grayscale',
      transitionDuration: '0.5s',
      transitionProperty: 'transform'
    },
    media: {
      height: 200
    },
    paper: {
      padding: theme.spacing(2)
    }
  })
);

export default function Item({producto}) {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6} lg={4}>
                <li key={producto.id} style={{listStyle: 'none', width: 300}}>
                    <Paper className={classes.paper} elevation={3}>
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
                    </Paper>
                </li>
        </Grid>
    )
    
}
