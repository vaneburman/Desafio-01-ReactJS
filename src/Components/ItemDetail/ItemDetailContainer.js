import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';
import ItemDetail from './ItemDetail';
import Loading from '../Loading';
import { Grid } from '@material-ui/core';



export default function ItemDetailContainer() {

    const [producto, setProducto]= useState({});

    const { id } = useParams()

   
    useEffect(() => {

        const collection = firestore.collection('productos')

        if(id) {
            const filtrado = collection.doc(id)
            const query = filtrado.get()
            
            query.then((resultado) => {
                
                const id = resultado.id
                const data = resultado.data()
                setProducto({id, ...data})
                console.log(producto)
        })

    }}, [id])  


    if(!!producto.id){
  return(
        <Grid item xs={12} justifyContent="center" align='center'>
                <ItemDetail detail={producto}/>
        </Grid>
    )
  } else {
    return( 
        <Grid item xs={12} justifyContent="center" align='center'>
            <Loading />
        </Grid>
    )
 }
}
