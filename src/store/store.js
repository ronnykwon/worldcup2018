import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import groupReducer from '../reducers/groupReducer';

// contient l'état de l'application avec ses données
const store = createStore(
    combineReducers({
       groups: groupReducer 
    }),
    applyMiddleware(thunk)
);

export default store;