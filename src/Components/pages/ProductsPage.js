import React from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';
import { Container } from '@material-ui/core';

export default function ProductsPage() {
    return (
        <Container maxWidth='lg'>
            <ItemListContainer />
        </Container>
    )
}
