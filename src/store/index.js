import { applyMiddleware, combineReducers, createStore } from "redux"
import { categoriesReducer} from "./categoriesReducer"
import { productsReducer} from "./productsReducer"
import { productReducer } from "./productReducer"
import { thunk } from "redux-thunk"
import { cartReducer } from "./cartReducer"
import { formReducer } from "./formReducer"


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))