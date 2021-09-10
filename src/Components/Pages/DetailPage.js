import React from 'react'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      },
      appBarSpacer: theme.mixins.toolbar,
      
}))
export default function DetailPage() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.appBarSpacer} />
            <Grid container justify = "center">   
                    <Container maxWidth="lg" className={classes.content}>
                        <Grid item spacing={1}>
                            <ItemDetailContainer />
                        </Grid>
                    </Container>
            </Grid>   
        </> 
    )
}