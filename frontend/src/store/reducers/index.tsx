import {combineReducers} from "redux";
import postReducer from "./postReducer.tsx";

export const rootReducer = combineReducers({
    posts: postReducer,
});

