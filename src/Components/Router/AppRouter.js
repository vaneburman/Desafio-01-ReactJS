import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProductsPage from '../pages/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardPage from '../pages/DashboardPage';
import ProductsTablePage from '../pages/ProductsTablePage';
import CategoryPage from '../pages/CategoryTablePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage'
import NavBar from '../NavBar/NavBar';
import PrivateRoute from './PrivateRoute';
import AuthProvider from '../../Auth/AuthProvider';


export default function AppRouter() {
    return (
        <div>
            <AuthProvider>
                <NavBar />  
                    <Switch> 
                        <Route exact path='/' component={HomePage} />
                        <Route path='/About' component={AboutPage} />
                        <Route path='/Contact' component={ContactPage} />
                        <Route path='/Products' component={ProductsPage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/register' component={RegisterPage} />
                        <PrivateRoute exact path='/Dashboard' component={DashboardPage} />
                        <Route exact path='/tableproducts' component={ProductsTablePage} />
                        <Route exact path='/category' component={CategoryPage} />    
                        <Route path='*' component={NotFoundPage} />
                    </Switch>
            </AuthProvider>
        </div>
    )
}
