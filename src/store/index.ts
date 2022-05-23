import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import calcReducer from './calculator';

// DEBUG
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(calcReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
