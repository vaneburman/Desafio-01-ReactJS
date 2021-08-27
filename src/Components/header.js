import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';



const Header = () =>
    <header>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
    </header>


export default Header 