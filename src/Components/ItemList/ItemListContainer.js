import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import ItemList from './ItemList';
import { firestore } from '../../firebase';
import { Container, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '../Pages/Slider';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {

        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        height: '100vh',
      },
    text: {
        marginTop: '2rem'
    }
}))



const ItemListContainer = () =>{
    const classes = useStyles()
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
      
        console.log(productos)

      if(productos.length!== 0 && !id){
        return(
            <Container maxWidth="lg" className={classes.content}>
                    <Slider productos={productos}/>
                    <Divider />
                    <Typography component="h1" variant="h6" noWrap align='center' className={classes.text}> Productos </Typography>
                    <ItemList lista={productos}/>
                
            </Container>
        )
        } 
        else if (productos.length!== 0 && !!id){
            return(
                <Container maxWidth="lg" className={classes.content}>
                        <ItemList lista={productos}/>
                    
                </Container>
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