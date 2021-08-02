const types = {
    ADD_CART: 'ADD_CART',
    REMOVE_ITEM_CART: 'REMOVE_ITEM_CART'    
}

//el estado inicial de mi carrito global es vacío
const initialStore = {
    products: [ 

    ]
}

//voy definiendo las acciones que me actualizan el store global. Tengo una única acción por el momento, que es agregar items (objeto) al array de productos. 
const storeReducer = (state, action) => {
    switch(action.type) {
        case types.ADD_CART:
            return {
                ...state,
                products: state.products.concat(action.payload)
            };
        default:
            return state;
    }
}

export { initialStore, types }
export default storeReducer