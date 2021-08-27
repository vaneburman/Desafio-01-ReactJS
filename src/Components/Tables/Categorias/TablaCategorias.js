import React from 'react';
//import Boton from './Boton'
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
                {lista.map((l)=>{
                    return(
                            <tr key={l.id}>

                                    <td>{l.categoria}</td>
                                    <td>{l.descripcion}</td>
                                    
                                    <Botones data = {['Activo', 'Editar', 'Eliminar']} />
                            </tr>
                        )}
                    )
                }
            </tbody>
        </table>



    )

}