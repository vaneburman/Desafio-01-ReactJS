import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from './ListaProductos';





const ItemListContainer = () =>{

    const [productos, setProductos]= useState([ListaProductos]);
   
      useEffect(() => {
          const promesa = new Promise ((res, rej)=> {
              setTimeout(()=> {
                  res(ListaProductos)
              }, 2000)
          })
          promesa.then((ListaProductos)=>{
              console.log('OK');
              setProductos(ListaProductos)
          })
      })

    console.log(productos)
    



    return(
    <>
            <ItemList lista={productos}/>
    </>
    )
    };

export default ItemListContainer