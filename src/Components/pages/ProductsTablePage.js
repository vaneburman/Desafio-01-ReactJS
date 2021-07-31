import React from 'react';
import TablaProductos from '../Tables/Productos/TablaProductos';
import { ColumnsP } from '../Tables/Productos/columnsP';
import { listaProductos } from '../Tables/Productos/listaProductos'

export default function ProductsTablePage() {
    return (
        <TablaProductos columns={ColumnsP} lista={listaProductos}/>
    )
}
