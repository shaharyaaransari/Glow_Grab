import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";



// Reducers ******************
import { API_URL } from "./Products/reducer";
import { reducer as ProductReducer } from "../Redux/Products/reducer";
import {reducer as cartReducer} from "./carts/reducer"

// Store *********************
const rootReducer = combineReducers({ API_URL, ProductReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
