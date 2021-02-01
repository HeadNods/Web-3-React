import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadState, saveState, deleteState } from './localStorage';
import { reducer as winkelmandReducer } from './winkelmand/slice';
import { reducer as orderReducer } from './order/slice';
import { throttle } from 'lodash';

const rootReducer = combineReducers({
    winkelmand: winkelmandReducer,
    order: orderReducer
});

const loadedStateFromLocalStorage = loadState();
//Verwijderen van de state voor debugging purposes..
const deletedStateFromLocalStorage = deleteState();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: deletedStateFromLocalStorage, loadedStateFromLocalStorage
});
store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000) );
