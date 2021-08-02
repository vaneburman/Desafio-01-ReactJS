import React from 'react';
import TablaProductos from '../Tables/Productos/TablaProductos';
import { ColumnsP } from '../Tables/Productos/columnsP';
import { listaProductos } from '../Tables/Productos/listaProductos';
import { Container } from '@material-ui/core';

export default function ProductsTablePage() {
    return (
        <Container maxWidth='lg'>
            <TablaProductos columns={ColumnsP} lista={listaProductos}/>
        </Container>
    )
}
