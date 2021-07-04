import { actions } from '../constant'

const initialState = {
    cardData: []
}

export const cardDetails =(state = initialState, actions)=>{
    switch (actions.type) {
        case actions.ADD_TO_CART:
            return {
                ...state,
                cardData: actions.data
            }
        default:
            return state
    }
}