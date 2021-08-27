import React from 'react';
import Botones from '../Botones';


export default function TablaCategorias(props){
    const { columns, lista } = props;
    console.log(lista);

    return(
        <table style={{ border: '1px solid white'}}>
            <thead>
                {columns.map(c => ( <th>{c.label}</th>))}
            </thead>
            <tbody>
                {lista.map((l, index)=>{
                    return(
                            <tr key={index}>


                                    <td>{l.categoria}</td>
                                    <td>{l.producto}</td>
                                    <td>{l.cod}</td>
                                    <td>{l.precio}</td>
                                    <td>{l.stock}</td>
                                    <Botones data = {['Activo', 'Editar', 'Eliminar']} />
                            </tr>
                        )}
                    )
                }
            </tbody>
        </table>



    )

}