import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import ItemList from './ItemList';
import { firestore } from '../../firebase';



const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
    const {id} = useParams(); 

      useEffect(() => {
        const collection = firestore.collection('productos')

        if(!id){
          
        const query = collection.get()

        query.then((resultados)=>{

            const listado = []
            resultados.forEach((documento) => {
                const id = documento.id
                const data = documento.data()
                const data_final = {id, ...data}

                listado.push(data_final)

            })
            setProductos(listado)
        })

      } else {
          const queryFiltrado = collection.where("category", "==", id).get()
          queryFiltrado.then((categoria)=>{
              const listadoFiltrado = []
              categoria.forEach((documento) => {
                  const id = documento.id;
                  const data = documento.data();
                  const data_final = {id, ...data}
                  listadoFiltrado.push(data_final)
          })
          setProductos(listadoFiltrado)
        })}}, [id])
      


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