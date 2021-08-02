import React from 'react';
import { useEffect, useState } from 'react';
import { ListaProductos } from '../ItemList/ListaProductos';
import ItemDetail from './ItemDetail'


//terminar!!!!!!!!!!!!!!!!!!!!!!!!!!


const ItemDetailContainer = () =>{

    const [producto, setProducto]= useState(ListaProductos[2]);
   
      useEffect(() => {
          const getItem = new Promise ((res, rej)=> {
              setTimeout(()=> {
                  res(producto)
              }, 2000)
          })
          getItem.then((producto) => {
              console.log('OK');
              setProducto(producto)
          })
      })

    console.log(producto)
    



    return(
    <>
            <ItemDetail detalle={producto}/>
    </>
    )
    };

export default ItemDetailContainer