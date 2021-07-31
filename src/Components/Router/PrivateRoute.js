import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import useAuth from '../../Auth/useAuth'

//const user= {id: 1, name: 'Vanesa'}
export default function PrivateRoute({component: Component, ...rest}) {
    const Auth = useAuth();
    return (
        <Route {...rest} >
            {Auth.user ? <Component /> : <Redirect to='/login'/>}
        </Route>
    )
}
