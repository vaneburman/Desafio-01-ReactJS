import {useState, useEffect} from 'react';
import useCart from '../../Context/useCart';
import Loading from '../Loading';
import Box from '@material-ui/core/Box';
import { Alert, AlertTitle } from '@material-ui/lab';
import useOC from '../../Context/useOC';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router';



export default function OrdenContainer({}) {
    const {cart, totalPrice, clear} = useCart();
    const {newOC, idOC, buyer} = useOC();
    // const [comprador, setComprador] = useState(false);
    const [seg, setSeg] = useState(5);
 


    useEffect(()=> {
        if(buyer){
            newOC(cart)
        }
    }, [])
    
    useEffect(()=>{
            setInterval(() => setSeg(seg-1) ,1000)
            if(seg===0){
                window.location.reload()
            }
        
    }, [seg])
   


    
    return (
        <Box display='flex' justify='center'>
            {/* {idOC.length>0 ?
                <Checkout id={idOC} />
            :
                <Loading />
            } */}
            <>
                     <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                         <Typography> 
                            Compra Finalizada exitosamente — <strong>ID: {idOC}, Total: $ {totalPrice}</strong>
                         </Typography>
                         <Typography>
                            Enviaremos un mail a <strong>{buyer.email}</strong> para coordinar el envío
                         </Typography>
                         <Typography variant='h6'>
                            Será redirigido al Home en {seg}seg
                         </Typography>
                         {seg===0 &&
                             <Redirect to='/' />
                         }

                         
                     </Alert>

           </>
        </Box>
    )
}



