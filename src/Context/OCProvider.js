import React, { createContext, useState } from 'react';
import "firebase/firestore";
import {firestore} from '../firebase';
import firebase from "firebase/app";
import useCart from './useCart';


export const OCContext = createContext();


const OCProvider = ({children}) => {
    const { Provider } = OCContext; 
    const { totalPrice } = useCart(); 
    const [IDBuyer, setIDBuyer] = useState('');
    const [buyer, setBuyer] = useState({});
    const [idOC, setidOC] = useState("");

    
    const findBuyer = (id) => {
        setIDBuyer(id)
    }


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
        IDBuyer,
        newOC,
        idOC,
        buyer,
        newBuyer
    }
 

    return (
        <Provider value = {ContextValue}>
            {children}
        </Provider>

    )
    }


export default OCProvider