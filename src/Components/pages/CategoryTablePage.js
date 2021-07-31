import React from 'react'
import TablaCategorias from '../Tables/Categorias/TablaCategorias';
import { Columns } from '../Tables/Categorias/columns';
import { listaCategorias } from '../Tables/Categorias/listaCategorias'

export default function CategoryTablePage() {
    return (
        <TablaCategorias columns={Columns} lista={listaCategorias}/>
    )
}
