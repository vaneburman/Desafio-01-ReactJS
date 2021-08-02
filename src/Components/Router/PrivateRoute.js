import React from 'react';
import { Route, Redirect} from 'react-router-dom';

//const user = undefined;
const user= {id: 1, name: 'Vanesa'}
export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} >
            {user ? <Component /> : <Redirect to='/login'/>}
        </Route>
    )
}
