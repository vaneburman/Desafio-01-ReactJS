import React from 'react';
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => 
    <>
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <ItemListContainer greeting="Aquí van las listas de Items"/>
        </React.Fragment>
    </>

export default App

