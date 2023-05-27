import productsReducer from "./productsReducer";
import statusReducer from "./statusReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    products :productsReducer , status :statusReducer
})

export default rootReducer