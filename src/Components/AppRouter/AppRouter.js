import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import ItemListContainer from '../ItemList/ItemListContainer';

export default function AppRouter() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={ItemListContainer} />
                <Route path='/category/:id' component={ItemListContainer} />
                <Route path='/item/:id' component={ItemDetailContainer} />
            </Switch>
        </>
    )
}
