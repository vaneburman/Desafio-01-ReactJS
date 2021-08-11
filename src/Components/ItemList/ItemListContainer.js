import { Container } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import ItemList from './ItemList';
import { ListaProductos } from './ListaProductos';



const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
    const {id} = useParams(); 

    console.log('esto es params en list')
    console.log(id)
      useEffect(() => {
          
          const promesa = new Promise ((res)=> {
              setProductos([]);
              setTimeout(()=> {
                if(id){
                  res(ListaProductos.filter(p => p.category === id))
                }
                else {
                    res(ListaProductos)
                }
            }
              , 2000)
          })
          promesa.then((prod)=>{
              
              setProductos(prod)
          })
      }, [id])
      
      console.log(productos)

    

      if(productos.length!== 0){

        return(
            <>
                
                
                    <ItemList lista={productos}/>
                
            </>
        )
        }
     else {
        return( 
            <div style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop: 100}}>
                <Loading />
            </div>
        )
     }
    }

export default ItemListContainer