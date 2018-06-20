import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import groupReducer from '../reducers/groupReducer';

const store = createStore(
    combineReducers({
       groups: groupReducer 
    }),
    applyMiddleware(thunk)
);

export default store;