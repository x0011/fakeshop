import { cartActions, CartActionType, ICartState } from "../actions/cartActions";


const initState = {
    products: [],
}

export const cartReducer = (state: ICartState = initState, action: CartActionType) => {
    switch (action.type) {
        case cartActions.ADD:
            return {products:[...state.products, action.payload]};
        case cartActions.REMOVE:
            return {products:[...state.products.filter(item => item.id !== action.payload)]};
        default:
            return state;
    }
}