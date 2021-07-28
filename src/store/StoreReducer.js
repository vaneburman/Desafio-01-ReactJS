const types = {
    ADD_CART: 'ADD_CART',
    REMOVE_ITEM_CART: 'REMOVE_ITEM_CART'    
}

const initialStore = {
    products: [ 
    ]
}

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