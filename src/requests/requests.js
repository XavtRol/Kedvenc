import { getCategoriesAction } from "../store/categoriesReducer"
import { getProductAction } from "../store/productReducer"
import { getProductsAction } from "../store/productsReducer"

export const base_url = 'http://localhost:3333'

const categories_url = base_url + '/categories/all'
const products_url = base_url + '/products/all'
const product_url = base_url + '/products/'


export const fetchCategories = () => {
    return function (dispatch) {
        fetch(categories_url)
        .then(res => res.json())
        .then(data => dispatch(getCategoriesAction(data)))
    }
}

export const fetchProducts = () => {
    return function (dispatch) {
        fetch(products_url)
        .then(res => res.json())
        .then(data => {
            dispatch(
                getProductsAction({
                    data,
                    category: {title: 'All products'}
                })
            )
        })
    }
}

export const fetchProduct = (productId) => {
    return function (dispatch) {
        fetch(product_url + productId)
        .then(data => data.json())
        .then(data => dispatch(getProductAction(data[0])))
    }
}

export const fetchProductListByCategory = (catId) => {
    return function (dispatch) {
        fetch(base_url + '/categories/' + catId)
        .then(data => data.json())
        .then(data => dispatch(getProductsAction({
            data: data.data, category: data.category
        })))
    }
}