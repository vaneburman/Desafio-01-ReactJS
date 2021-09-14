import React from 'react'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            maxWidth: 280,
            },
      },
    appBarSpacer: theme.mixins.toolbar
      
}))
export default function DetailPage() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.appBarSpacer} />
                <Container className={classes.root}>   
                        <ItemDetailContainer />
                </Container>   
        </> 
   
    )
}