import React from 'react';
import Header from './header'
import ItemListContainer from './ItemList/ItemListContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoreProvider from '../store/StoreProvider';
import Container from '@material-ui/core/Container';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';


const App = () => 
    <>
        <StoreProvider>
            <React.Fragment>
                <CssBaseline />
                <Header/>
                <Container maxWidth='lg'>
                    <ItemListContainer />
                    <ItemDetailContainer />
                </Container>
            </React.Fragment>
        </StoreProvider>
    </>

export default App

