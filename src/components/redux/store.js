import { createStore, combineReducers } from 'redux';
import gameOnReducer from './reducer';

const rootReducer = combineReducers({
    gameOn: gameOnReducer,
  });

const store = createStore(
    rootReducer
);

export default store;