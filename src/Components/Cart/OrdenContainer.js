import {useState, useEffect} from 'react';
import {firestore} from '../../firebase';
import useCart from '../../Context/useCart';
import firebase from "firebase/app";
import "firebase/firestore";
import Loading from '../Loading';
import Box from '@material-ui/core/Box';

import Checkout from './Checkout';

export default function OrdenContainer({total}) {
    const {cart} = useCart()
    const [idOC, setidOC] = useState("")
    

    useEffect(() => {

        const collection = firestore.collection("OC")

        const buyer = {nombre:"userTest",email:"user@test.com",telefono:5455555555}

        const itemCart = cart.map(i => {
            return {id: i.item.id, title: i.item.title, UnitPrice: i.item.price}
        })
        const newOC = {
            buyer: buyer,
            item: itemCart,
            data: firebase.firestore.Timestamp.fromDate(new Date()),
            TotalPrice: total
        }
        const query = collection.add( newOC )

        query.then((resultado)=>{
            setidOC(resultado.id)
            
        })
    }, [] )

    console.log(idOC)
    

    
    return (
        <Box display='flex' justifyContent='center'>
            {idOC.length>0 ?
                <Checkout id={idOC} />
            :
                <Loading />
            }
        </Box>
    )
}
