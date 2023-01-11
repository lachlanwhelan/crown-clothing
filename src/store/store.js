import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

//combined place where all of our redux happens
//where state lives where we recieve actions and dispatch them into reducers to update the state
//this is where we create our store object


//need a root-reducer - where all reducers are added


const middleware = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'root',
    storage,
    backlist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

//export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

//currying - a function that returns another function

/* const curryFunc = (a) => (b, c) => {

    a + b - c;
}

const with3 = curryFunc(3);  3 is a
const with10 = curryFunc(10); 10 is a

with3(2, 3); */

/* const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return  next(action);
    }

    console.log('type:', action.type);
    console.log('payload:', action.payload);
    console.log('currentState:', store.getState());

    next(action);

    console.log('next state:', store.getState());
}

const middleware = [loggerMiddleware]; */