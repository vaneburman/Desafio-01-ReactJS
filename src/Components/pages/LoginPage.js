import React from 'react';
import { Button, Container } from '@material-ui/core';


export default function LoginPage() {
    return (
        <Container maxWidth='lg'>
            <Button variant="contained" color="primary" style={{backgroundColor: '#34A512', margin: '2rem'}}>Login</Button>
        </Container>
    )
}
