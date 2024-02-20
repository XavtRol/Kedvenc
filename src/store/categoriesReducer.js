const defaultState = {
    categories: [],
    loading: false
}

const GET_CATEGORIES = 'GET_CATEGORIES'

// Reducer 
export const categoriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
    
        default:
            return state
    }
} 


// Action creator
export const getCategoriesAction = payload => {
    return {
        type: GET_CATEGORIES,
        payload
    }
}