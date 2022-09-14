import { Dispatch } from "react"
import { IProduct } from "../models/models";
import { cartActions, CartActionType } from "../store/actions/cartActions";


export const addItemToCart = (item: IProduct) => {
    return (dispatch: Dispatch<CartActionType>) => {
        dispatch({type: cartActions.ADD, payload: item});
    }
}