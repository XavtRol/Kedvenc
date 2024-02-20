const defaultState = {
    products: [],
    category: {}
}


const GET_PRODUCTS = 'GET_PRODUCTS'

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                products: action.payload.data,
                category: action.payload.category
            }
    
        default:
            return state
    }
}

export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload})

