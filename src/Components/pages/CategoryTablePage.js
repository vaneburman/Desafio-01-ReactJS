import React from 'react'
import TablaCategorias from '../Tables/Categorias/TablaCategorias';
import { Columns } from '../Tables/Categorias/columns';
import { listaCategorias } from '../Tables/Categorias/listaCategorias';
import { Container } from '@material-ui/core';

export default function CategoryTablePage() {
    return (
        <Container maxWidth='lg'>
            <TablaCategorias columns={Columns} lista={listaCategorias}/>
        </Container>
    )
}
