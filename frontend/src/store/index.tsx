import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from "redux-thunk";
import postReducer from "../features/posts/reducer.tsx";
import pageReducer from "../features/pages/reducer.tsx";

const initialStore = {};
export const rootReducer = combineReducers({
    posts: postReducer,
    pages: pageReducer,
});
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;