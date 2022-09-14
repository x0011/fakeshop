import { Dispatch } from "redux";
import {CategoriesAction, categoriesNames} from '../store/actions/categoriesActions';


export const setCategory = (catKey: number) => {
    return (dispatch: Dispatch<CategoriesAction>) => {
        dispatch({type: categoriesNames.CATEGORY_SET, payload: catKey});
    }
}