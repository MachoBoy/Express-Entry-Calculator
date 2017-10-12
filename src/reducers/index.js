import { combineReducers } from 'redux';
import calculationReducer from './calculationReducer';
import toggleReducer from './toggleReducer';

const reducers = combineReducers({
    pointsContainer: calculationReducer,
    toggle: toggleReducer,
});

export default reducers;
