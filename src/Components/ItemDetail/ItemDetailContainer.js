import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListaProductos } from '../ItemList/ListaProductos';
import ItemDetail from './ItemDetail';
import Loading from '../Loading';


export default function ItemDetailContainer() {

    const [producto, setProducto]= useState({});

    const { id } = useParams()

   
    useEffect(() => {

        const getItem = new Promise ((res)=> {
            setTimeout(()=> {
                res(ListaProductos.find(producto=>producto.id == id))
            }, 2000)
        }) 
        getItem.then((detalle)=>{
            setProducto(detalle)
        })
    }, [id])

    console.log(producto)

  


    if(producto.id){
  return(
        <>
                <ItemDetail detail={producto}/>
        </>
    )
  } else {
    return( 
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop: 100}}>
            <Loading />
        </div>
    )
 }
}
