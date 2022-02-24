import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import {loginUser} from "./auth"
import {reducer as toastrReducer} from 'react-redux-toastr'
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  auth:loginUser,
  toastr: toastrReducer
});
export default reducers;
