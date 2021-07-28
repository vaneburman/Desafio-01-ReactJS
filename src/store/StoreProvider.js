import { createContext, useReducer, useContext } from 'react';
import StoreReducer, { initialStore } from './StoreReducer';

const StoreContext = createContext();

const StoreProvider = ({ children }) => 
    <StoreContext.Provider value={useReducer(StoreReducer, initialStore)}>
        {children}
    </StoreContext.Provider>

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useStore, useDispatch }
export default StoreProvider