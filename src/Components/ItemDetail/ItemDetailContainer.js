import React from 'react'

import { useState, useEffect } from 'react';
import { ListaProductos } from '../ItemList/ListaProductos';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {

    const [producto, setProducto]= useState({});
    const producto1 = ListaProductos[0]; //traigo un producto de ejemplo para maquetar

    useEffect(() => {
        const getItem = new Promise ((res)=> {
            setTimeout(()=> {
                res(producto1) 
            }, 2000)
        }) 
        getItem.then((detalle)=>{
            console.log('Acá se actualiza el detalle');
            setProducto(detalle)
        })
    }, [])
    console.log('acá van a estar los detalles')
    console.log(producto)

  



  return(
        <>
                <ItemDetail detail={producto}/>
        </>
    )
  }
