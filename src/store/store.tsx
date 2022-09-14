import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;