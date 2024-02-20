const defaultState = {
    products: [{
    count: 5,
    discont_price: null,
    id: 2,
    image: "/product_img/2.jpeg",
    price: 10.75,
    title: "Angelonia angustifolia Archangel™ White" }],
    totalCart: 0,
    totalAmount: 0
}

const ADD_TO_CART = 'ADD_TO_CART'
const INCR_ITEM = 'INCR_ITEM'
const DECR_ITEM = 'DECR_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

// Reducer 
export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            const productCheck = state.products.find(product => product.id === action.payload.id)

            return {
                ...state,
                products: productCheck 
                ? state.products.map(product => {
                    if(product.id === action.payload.id)
                        return {
                            ...product,
                            count: product.count + 1
                        }

                    return product
                })
                : [...state.products, {...action.payload, count: 1}]
            }
        }

        case INCR_ITEM: {
            return {
                ...state,
                products: state.products.map(product => {
                    if(product.id === action.payload)
                        return {
                            ...product,
                            count: product.count + 1
                        }

                    return product
                })
            }
        }
        case DECR_ITEM: {
            return {
                ...state,
                products: state.products.map(product => {
                    if(product.id === action.payload)
                        return {
                            ...product,
                            count: product.count - 1
                        }

                    return product
                })
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        }
    
        default:
            return state
    }
} 


// Action creator
// Добавление 
export const addProductAction = payload => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

// Увеличить на 1 
export const incrProductAction = id => {
    return {
        type: INCR_ITEM,
        payload: id
    }
}

// Уменшить на 1 
export const decrProductAction = id => {
    return {
        type: DECR_ITEM,
        payload: id
    }
}

// Удалить позицию 
export const deleteProductAction = id => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}