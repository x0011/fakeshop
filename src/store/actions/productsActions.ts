// Types
export enum productsActionsNames {
  FETCH = 'FETCH',
  FETCH_S = 'FETCH_SUCCESS',
  FETCH_E = 'FETCH_ERROR',
}

export interface IProductsState {
  products: any[],
  loadStatus: boolean,
  error: null | string,
  category?: number,
}

export interface IFetchProducts {
  type: productsActionsNames.FETCH,
}

export interface IFetchProducts_SUCCESS {
  type: productsActionsNames.FETCH_S,
  payload: [],
}

export interface IFetchProducts_ERROR {
  type: productsActionsNames.FETCH_E,
  payload: string,
}

export type ProductsAction = IFetchProducts | IFetchProducts_SUCCESS | IFetchProducts_ERROR;

export interface IActionTypes {
  type: string,
  payload?: any,
}

//Actions

export const fetchProducts = () => {
  return {
    type: productsActionsNames.FETCH,
  }
}