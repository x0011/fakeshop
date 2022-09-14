import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppDispatch, RootState } from "../store/store";
import { ProductsAction, fetchProducts } from '../store/actions/productsActions';


export const useAppDispatch: () => ThunkDispatch<RootState, {}, ProductsAction > = useDispatch;