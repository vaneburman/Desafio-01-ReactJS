import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import DetailPage from '../Pages/DetailPage';
import CartPage from '../Pages/CartPage';
import HomePage from '../Pages/HomePage';

export default function AppRouter() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/category/:id' component={HomePage} />
                <Route path='/item/:id' component={DetailPage} />
                <Route exact path='/cart' component={CartPage} />
            </Switch>
        </>
    )
}
