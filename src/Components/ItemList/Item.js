import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto'
    },
    content: {
      maxWidth: 345,
      verticalAlign: 'middle',
      transform: 'translateZ(0)',
      boxShadow: '0 0 1px rgba(0, 0, 0, 0.5)',
      backfaceVisibility: 'hidden',
      [theme.breakpoints.down('md')]: {
        maxWidth: 280,
        },
      
    },
    media: {
      height: 200
    },
    paper: {
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
            maxWidth: 280,
        },
    }
  })
);

export default function Item({producto}) {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={5} md={6} lg={4} className={classes.root}>
                <li key={producto.id} style={{listStyle: 'none', width: 300}}>
                    <Paper className={classes.paper} elevation={3}>
                        <Card className={classes.content}>
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
