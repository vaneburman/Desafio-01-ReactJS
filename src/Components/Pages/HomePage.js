import React from 'react'
import ItemListContainer from '../ItemList/ItemListContainer'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center'
      },
      appBarSpacer: theme.mixins.toolbar,
      
}))
export default function HomePage() {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.content}>
                    <Grid container spacing={1}>
                        <ItemListContainer />
                    </Grid>
                </Container>
        </main>    
    )
}
