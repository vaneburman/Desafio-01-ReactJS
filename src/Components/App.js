import React from 'react';
import Header from "../Components/header";
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomProvider from '../Context/CustomProvider';
import AuthProvider from '../auth/AuthProvider';


const App = () => 
    <AuthProvider>
            <CustomProvider>
                <React.Fragment>
                    <CssBaseline />
                    <Header/>
                </React.Fragment>
            </CustomProvider>
    </AuthProvider>

export default App

