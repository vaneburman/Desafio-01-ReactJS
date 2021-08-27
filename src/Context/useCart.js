import { useContext } from 'react'
import { CartContext } from './CustomProvider'

export default function useCart() {
    return useContext(CartContext)
}
