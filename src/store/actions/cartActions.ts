import { IProduct } from "../../models/models"

export enum cartActions {
    ADD = "cart/add-item",
    REMOVE = "cart/remove-item",
}

export interface ICartActionAdd{
    type: string, 
    payload: IProduct,
};

export interface ICartActionRemove{
    type: string, 
    payload: number,
};

export type CartActionType = ICartActionAdd | ICartActionRemove;

export interface ICartState {
    products: IProduct[],
}