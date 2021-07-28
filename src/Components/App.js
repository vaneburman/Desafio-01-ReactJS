import React from 'react';
import Header from "./Header";
import ItemListContainer from './ItemList/ItemListContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoreProvider from '../store/StoreProvider';

const App = () => 
    <>
        <StoreProvider>
            <React.Fragment>
                <CssBaseline />
                <Header/>
                <ItemListContainer greeting="Aquí van las listas de Items"/>
            </React.Fragment>
        </StoreProvider>
    </>

export default App

