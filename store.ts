import {
    combineReducers,
} from 'redux';
import {connectRouter,routerMiddleware} from 'connected-react-router'
import userReducers from './app/users/reducers';
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';


export const history = createBrowserHistory();
const reducer = combineReducers({
    router:connectRouter(history),
    users: userReducers
})
// Stateの型のため定義（Typescript用）
export type RootState = ReturnType<typeof reducer>

export const store = configureStore({
    reducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(
            routerMiddleware(history),
            thunk
        )
    }
})
