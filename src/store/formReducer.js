const defaultState = {
    sale: {message: '', status: ''},
    order: {message: '', status: ''},
}

const POST_SALE = 'POST_SALE'

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POST_SALE:
            return {
                ...state,
                sale: action.payload
            }
    
        default:
            return state
    }
}

// action creators
export const getResultSaleActionCreator = payload => ({
    type: POST_SALE, 
    payload,
})