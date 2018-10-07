import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CounterReducer'

const reducer = combineReducers({
    CountReducer
});

const initialState = {
    CountReducer: {count: 123, wish_value: 12}
};


let store = createStore(reducer, initialState);

export default store;