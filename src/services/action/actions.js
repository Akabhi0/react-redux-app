import { actions } from '../constant'

export const addToCart = (data) => {
    return {
        data: data,
        type: actions.ADD_TO_CART
    }
}