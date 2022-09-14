// Имена экшенов
export enum categoriesNames{
    CATEGORY_SET = 'category/set',
    CATEGORY_FETCH = 'category/fetch',
    CATEGORY_FETCH_SUCCESS = 'category/fetch-success',
    CATEGORY_FETCH_ERROR = 'category/fetch-error',
}

// Интерфейс для экшена category/fetch
interface ICategoriesActionFetch{
    type: categoriesNames.CATEGORY_FETCH,
}

// Интерфейс для экшена category/fetch-success
interface ICategoriesActionSuccess {
    type: categoriesNames.CATEGORY_FETCH_SUCCESS,
    payload: string[],
}

// Интерфейс для экшена category/fetch-error
interface ICategoriesActionError {
    type: categoriesNames.CATEGORY_FETCH_ERROR,
    payload: string,
}

// Интерфейс для экшена category/set
interface ICategoriesActionSet {
    type: categoriesNames.CATEGORY_SET,
    payload: number,
}

// Тип для экшена
export type CategoriesAction = 
    ICategoriesActionFetch | 
    ICategoriesActionSuccess | 
    ICategoriesActionError | 
    ICategoriesActionSet;

// Интерфейс для стейта
export interface ICategories {
    categories: string[],
    currentCategory: number,
    status: boolean,
    error: string | null,
}