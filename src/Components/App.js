import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter';
import CustomProvider from '../Context/CustomProvider';
import OCProvider from '../Context/OCProvider';

const App = () => 
    <CustomProvider>
        <OCProvider>
            <BrowserRouter>
                <CssBaseline />
                <AppRouter />
            </BrowserRouter>
        </OCProvider>
    </CustomProvider>

export default App

