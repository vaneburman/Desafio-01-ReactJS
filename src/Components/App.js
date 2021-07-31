import React from 'react';
import Header from "../Components/header";
import CssBaseline from '@material-ui/core/CssBaseline';
import StoreProvider from '../store/StoreProvider';


const App = () => 
    <>
            <StoreProvider>
                <React.Fragment>
                    <CssBaseline />
                    <Header/>
                </React.Fragment>
            </StoreProvider>
    </>

export default App

