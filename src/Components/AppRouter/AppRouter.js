import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import DetailPage from '../Pages/DetailPage';
import CartPage from '../Pages/CartPage';
import HomePage from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage';
import CheckoutPage from '../Pages/CheckoutPage';
import UserPage from '../Pages/UserPage'

export default function AppRouter() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/category/:id' component={HomePage} />
                <Route path='/item/:id' component={DetailPage} />
                <Route exact path='/cart' component={CartPage} />
                <Route path='/checkout' component={CheckoutPage} />
                <Route exact path='/user' component={UserPage} />
                <Route path='/*' component={ErrorPage} />
            </Switch>
        </>
    )
}
