import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from './ListaProductos';



const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
      useEffect(() => {
          
          const promesa = new Promise ((res)=> {
              setTimeout(()=> {
                  res(ListaProductos)
              }, 2000)
          })
          promesa.then((prod)=>{
              console.log('Acá se actualiza');
              setProductos(prod)
          })
      }, [])
      console.log('acá van a estar los productos')
      console.log(productos)

    



    return(
        <>
                <ItemList lista={productos}/>
        </>
    )
    };

export default ItemListContainer