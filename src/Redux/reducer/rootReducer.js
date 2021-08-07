import filtersReducer from "./filtersReducer";
import pizzasReducer from "./pizzasReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    filtersReducer ,
    pizzasReducer
})

export default rootReducer