import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import ItemList from './ItemList';
import Slider from '../Pages/Slider';
import { firestore } from '../../firebase';
import { Grid, Hidden, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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


      if(productos.length!== 0 && !id){
        return(
            <>
                <Grid item xs={12} justifyContent="center" align='center'>
                    <Hidden xsDown={true}>
                        <Slider lista={productos} />
                    </Hidden>
            
                        <Typography component="h1" variant="h6" noWrap justify='center' className={classes.text}> Productos </Typography>
                        <ItemList lista={productos}/>
                </Grid>
            </>

        )
        } 
        else if (productos.length!== 0 && !!id){
            return(
                <Grid item xs={12} justifyContent="center" align='center'>
                        <ItemList lista={productos}/>
                    
                </Grid>
            )
        }
     else {
        return( 
            <Grid item xs={12} justifyContent="center" align='center'>
                <Loading />
            </Grid>
        )
     }
    }

export default ItemListContainer