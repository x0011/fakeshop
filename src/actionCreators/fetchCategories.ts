import axios from "axios";
import { Dispatch } from "redux";
import { CategoriesAction, categoriesNames } from "../store/actions/categoriesActions";

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
            dispatch({type: categoriesNames.CATEGORY_FETCH});
            const result = await axios.get('https://fakestoreapi.com/products/categories');
            dispatch({type:categoriesNames.CATEGORY_FETCH_SUCCESS, payload: result.data});
        } catch (error) {
            console.log('ОШибка:' + error);
            dispatch({type:categoriesNames.CATEGORY_FETCH_ERROR, payload: "Произошла ошибка при загрузке данных"});
        }
    }
}