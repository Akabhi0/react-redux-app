import {
    actions
} from '../constant'

const initialState = {
    cardData: []
}

export const cardDetails = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
            default:
                return state
    }
}