import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import worldcupReducer from '../reducers/worldcupReducer';

// contient l'état de l'application avec ses données
const store = createStore(
    combineReducers({
       worldcup: worldcupReducer
    }),
    applyMiddleware(thunk)
);

export default store;