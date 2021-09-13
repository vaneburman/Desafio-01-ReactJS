import {useState, useEffect} from 'react';
import useCart from '../../Context/useCart';
import Loading from '../Loading';
import Box from '@material-ui/core/Box';
import { Alert, AlertTitle } from '@material-ui/lab';
import useOC from '../../Context/useOC';
import { Typography } from '@material-ui/core';



export default function OrdenContainer({}) {
    const {cart, totalPrice} = useCart();
    const {newOC, idOC, buyer} = useOC();
    const [comprador, setComprador] = useState(false)
 


    useEffect(()=> {
        if(buyer){
            newOC(cart)
        }
    }, [])
    
   

    
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
                            Se enviará un mail a <strong>{buyer.email}</strong> para coordinar el envío
                         </Typography>
                     </Alert>

           </>
        </Box>
    )
}
