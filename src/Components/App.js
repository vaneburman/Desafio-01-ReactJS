import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter';

const App = () => 
    <>
            <BrowserRouter>
                <CssBaseline />
                <AppRouter />
            </BrowserRouter>
    </>

export default App

