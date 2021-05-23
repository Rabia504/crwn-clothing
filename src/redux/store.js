import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './root-reducer';
//import promise from 'redux-promise';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//const createstorewithmiddleware = createStore(rootReducer, applyMiddleware(promise))

export default store;
