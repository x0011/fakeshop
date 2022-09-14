import { IProductsState, ProductsAction, productsActionsNames } from "../actions/productsActions";

export const initState = {
  products: [],
  loadStatus: false,
  category: 0,
  error: null,
}

export const productsReducer = (state:IProductsState = initState, action: ProductsAction): IProductsState => {
  switch(action.type) {
    case productsActionsNames.FETCH:
      return {products: [], loadStatus: false, error: null}
    case productsActionsNames.FETCH_S:
      return {products: action.payload, loadStatus: true, error: null}
    case productsActionsNames.FETCH_E:
      return {products: [], loadStatus: false, error: action.payload}
    default:
      return state;
  }
}