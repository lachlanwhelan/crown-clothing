import { combineReducers } from "redux";
import {cartReducer} from "./cart/cart.reducer";
import { CategoriesReducer } from "./categories/category.reducer";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    //name of reducer and reducer function
    //reducerName: reducerFunction()
    user: userReducer,
    categories: CategoriesReducer,
    cart: cartReducer
});