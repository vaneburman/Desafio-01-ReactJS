import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkout from '../Cart/Checkout';

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        width: '90%', 
    },
    link:{
        color: 'white',
    },
    button: {
        backgroundColor: '#34A512',
        margin: '0 2rem',
        [theme.breakpoints.down('sm')]: {
            margin:  theme.spacing(2),
            },
    },
    root: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
        padding: theme.spacing(0, 6, 0, 1) ,
        [theme.breakpoints.down('sm')]: {
            padding:  theme.spacing(0, 0, 0, 6),
            },
      },

        appBarSpacer: theme.mixins.toolbar
          
      }
))


export default function CartPage() {
    const classes = useStyles()


    
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.root}>
                        <Grid container justify = "center" align='center' spacing={8}> 
                            <Grid item xs={12} >
                                <Checkout />
                            </Grid>
                        </Grid>
                    </Container>
                </>
        )
    } 
    

