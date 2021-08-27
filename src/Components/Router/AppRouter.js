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
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import CartPage from '../Cart/CartPage'


export default function AppRouter() {
    return (
        <div>
                <NavBar />  
                    <Switch> 
                        <Route exact path='/' component={HomePage} />
                        <Route path='/About' component={AboutPage} />
                        <Route path='/Contact' component={ContactPage} />
                        <Route path='/category/:id' component={ProductsPage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/register' component={RegisterPage} />
                        <Route path='/item/:id' component={ItemDetailContainer} />
                        <Route exact path='/cart' component={CartPage} />
                        <PrivateRoute exact path='/Dashboard' component={DashboardPage} />
                        <PrivateRoute exact path='/tableproducts' component={ProductsTablePage} />
                        <PrivateRoute exact path='/categories' component={CategoryPage} />    
                        <Route path='*' component={NotFoundPage} />
                        <Route path='/category/:id' component={ItemListContainer} />
                        
                    </Switch>
        </div>
    )
}
