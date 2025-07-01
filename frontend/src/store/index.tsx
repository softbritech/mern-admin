import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from "redux-thunk";
import postReducer from "../features/posts/reducer.tsx";
import pageReducer from "../features/pages/reducer.tsx";
import slideReducer from "../features/slides/reducer.tsx";
import layoutReducer from "../features/ui/reducer.tsx";
import serviceReducer from "../features/services/reducer.tsx";
import configReducer from "../features/config/reducer.tsx";

const initialStore = {};
export const rootReducer = combineReducers({
    posts: postReducer,
    pages: pageReducer,
    slides: slideReducer,
    services: serviceReducer,
    layout: layoutReducer,
    siteConfig: configReducer,
});
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;