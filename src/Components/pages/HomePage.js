import React from 'react'; 
import ItemListContainer from '../ItemList/ItemListContainer';
import useAuth from '../../auth/useAuth';

export default function HomePage() { 
    const auth = useAuth()
    console.log(auth)
 
          return  (
            <>
                <ItemListContainer />
            </>)
}
