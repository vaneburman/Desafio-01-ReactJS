import React from 'react';
import {useState, useEffect} from 'react';
import {firestore} from '../../firebase';
import Loading from '../Loading';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


export default function OrdenDetail(id) {

    const classes = useStyles();

    const [compra, setCompra] = useState({});
  


    useEffect(()=> {
        const OC = firestore.collection('OC').doc(id.id).get()
        OC.then(res => setCompra(res.data()))
    }, [])

    console.log(compra)
    console.log(id)
    return (
        <>
            { !!compra ? 
                <div className={classes.root}>
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Compra Finalizada exitosamente — <strong>ID: {id.id}, Total: $ {compra.TotalPrice}</strong>
                    </Alert>
                </div>
            :
                <Loading />
            }
        </>
    )
}
