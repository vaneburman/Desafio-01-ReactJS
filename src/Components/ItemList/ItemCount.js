import React, {useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

export default function ItemCount(props) {
    
   
    const classes = useStyles();
    const caja = {
        width: '4rem',
        textAlign: "center"}

    
    const [Count, setCount] = useState(props.initial);
    const [ open, setOpen ] = useState(false);



    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            setOpen(true);

        }
    }

    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        } else {
            alert('¿Eliminar item del carrito?'); 
            setCount(0);
                }
}
    const Confirmar = () => {
        if(props.stock > 0){
            props.onAdd(Count)
        }
    }

    const handleClose = (event) => {    
        setOpen(false);
      };

    if(Count === props.initial & props.stock > 0){
    return (
        <div className={classes.root}>
            <Button onClick={sumarContador} variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>Agregar</Button>
        </div>
        
    )
    } else if (Count === props.initial & props.stock === 0){
        return( 
        <div className={classes.root}>
            <Button variant="contained" disable > Sin Stock </Button>
        </div>
        )
    }
    else {
        return(
            <div className={classes.root}>
                <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
                        <Button onClick={restarContador} size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>-</Button>

                        <p style={caja}>{Count}</p>
                        
                        <Button onClick={sumarContador} size="small" variant="contained" color="primary" style={{backgroundColor: '#34A512'}}>+</Button>
                </div>
                <div>
                    <Button onClick={Confirmar} variant="outlined" style= {{color: '#34A512', borderColor: '#34A512'}} >Confirmar</Button>
                    {open && 
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                            <Alert onClose={handleClose}severity="error">
                            La Cantidad seleccionada supera el stock disponible
                            </Alert>
                        </Snackbar>}
                </div>
            </div>
        )
    }
}