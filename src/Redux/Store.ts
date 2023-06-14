import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Reducers ******************
import { API_URL } from "./Products/reducer";

// Store *********************
const rootReducer = combineReducers({ API_URL });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
