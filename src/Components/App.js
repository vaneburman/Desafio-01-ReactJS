import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter';
import CustomProvider from '../Context/CustomProvider';

const App = () => 
    <CustomProvider>
            <BrowserRouter>
                <CssBaseline />
                <AppRouter />
            </BrowserRouter>
    </CustomProvider>

export default App

