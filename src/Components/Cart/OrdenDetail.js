import React from 'react';
import {useState, useEffect} from 'react';
import {firestore} from '../../firebase';
import Loading from '../Loading';

export default function OrdenDetail(id) {

    const [compra, setCompra] = useState({});
    console.log(id)

    useEffect(()=> {
        const OC = firestore.collection('OC').doc(id.id).get()
        OC.then(res => setCompra(res.data()))
    }, [])

    console.log(compra)
    console.log(id)
    return (
        <>
            { !!compra ? 
                <div>
                    <p>Compra {id.id} finalizada</p>
                    <hr/>
                    <p> total de la compra {compra.TotalPrice}</p>
                </div>
            :
                <Loading />
            }
        </>
    )
}
