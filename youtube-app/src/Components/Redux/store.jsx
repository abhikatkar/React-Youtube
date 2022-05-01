

import {createStore , combineReducers} from "redux";

import { dataReducer } from "./Data/reducer";
import { searchReducer } from "./Search/reducer";


const rootReducer = combineReducers({
    data:dataReducer,
    value:searchReducer
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
)
