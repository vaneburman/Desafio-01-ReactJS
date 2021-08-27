import { MenuItem } from '@material-ui/core'
import React from 'react';
import useAuth from '../../auth/useAuth';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function LoginMenu() {
    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const handleLogin = () => {
        auth.login();
        history.push(location.state?.from || '/');
    }

    const handleLogout = () => {
        auth.logout();
        history.push(location.state?.from || '/');
    }

    
    return (
        <>
            <MenuItem>
            {!auth.isLogged() && 
                <NavLink to='/login' onClick={handleLogin} style={{color: 'white'}}>Login</NavLink>}
            </MenuItem>
            <MenuItem> 
            {auth.isLogged() && 
                <NavLink to='/' onClick={handleLogout} style={{color: 'white'}}>Logout</NavLink>}
            </MenuItem>   
        </>
    )
}
