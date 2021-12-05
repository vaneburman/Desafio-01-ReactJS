import { useContext } from 'react'
import { OCContext } from './OCProvider'

export default function useOC() {
    return useContext(OCContext)
}
