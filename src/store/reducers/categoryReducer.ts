import { categoriesNames, ICategories, CategoriesAction } from '../actions/categoriesActions';

// Инициализируем первоначальное состояние
export const initState: ICategories = {
    categories: [],
    currentCategory: 0,
    error: null,
    status: false,
};

// Редусер для категорий
export const categoryReducer = (state:ICategories = initState, action: CategoriesAction): ICategories => {
    switch(action.type) {
        case categoriesNames.CATEGORY_FETCH:
            return {currentCategory: 0, categories: [], status: false, error: null};
        case categoriesNames.CATEGORY_FETCH_SUCCESS:
            return {currentCategory: 0, categories: action.payload, status: true, error: null};
        case categoriesNames.CATEGORY_FETCH_ERROR:
            return {currentCategory: 0, categories: [], status: false, error: action.payload};
        case categoriesNames.CATEGORY_SET:
            return {...state, currentCategory: action.payload};
        default:
            return state;
    }
}