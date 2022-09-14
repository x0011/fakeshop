import {ProductsAction, productsActionsNames} from '../store/actions/productsActions';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchProducts = (category?: string) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({type: productsActionsNames.FETCH});
      let result;
      category 
        ? result = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        : result = await axios.get(`https://fakestoreapi.com/products/`)
      dispatch({type: productsActionsNames.FETCH_S, payload: result.data});
    } catch (error) {
      dispatch({
        type: productsActionsNames.FETCH_E, 
        payload: "Произошла ошибка загрузки товаров"
      });
    }
  }
}