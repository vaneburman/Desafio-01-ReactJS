import React, { createContext, useState } from 'react';
import "firebase/firestore";
import {firestore} from '../firebase';
import firebase from "firebase/app";
import useCart from './useCart';


export const OCContext = createContext();


const OCProvider = ({children}) => {
    const { Provider } = OCContext; 
    const { cart, totalPrice } = useCart(); 
    const [OC, setOC] = useState({});
    const [IDBuyer, setIDBuyer] = useState('');
    const [buyer, setBuyer] = useState({})
    const [idOC, setidOC] = useState("")

    
    const findBuyer = (id) => {
        setIDBuyer(id)
    }

    // const precioTotal = cart.reduce((sum, value) => 
    //         (typeof value.item.price == "number" ? sum + value.item.price : sum),0)

    const newBuyer = (id) => {
        firestore.collection('buyers').doc(id).get()
            .then(
            (resultado) => {
                const id = resultado.id
                const data = resultado.data()
                const data_final = {id, ...data}

                setBuyer(data_final)
        })
    }

    const newOC =(cart) => {
    if(Object.keys(buyer).length !== 0){
        const itemCart = cart.map(i => {
            return {id: i.item.id, title: i.item.title, UnitPrice: i.item.price, quantity: i.quantity}
    })

        console.log('esta es la data final', buyer)
        const orden = {
            buyer: buyer,
            item: itemCart,
            data: firebase.firestore.Timestamp.fromDate(new Date()),
            TotalPrice: totalPrice
        }

        const collection = firestore.collection("OC")

        const query = collection.add( orden )

        query.then((resultado)=>{
            setidOC(resultado.id)
            
        })
    }
    }
    
    
    const ContextValue = {
        findBuyer,
        newOC,
        OC, 
        idOC,
        buyer,
        IDBuyer, 
        newBuyer
    }
 

    return (
        <Provider value = {ContextValue}>
            {children}
        </Provider>

    )
    }


export default OCProvider