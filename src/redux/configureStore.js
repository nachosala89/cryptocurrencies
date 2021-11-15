import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cryptosReducer from './cryptos/cryptos';

const reducers = combineReducers({ cryptosReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
