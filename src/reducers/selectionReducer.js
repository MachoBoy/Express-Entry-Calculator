import { SELECT } from '../actions/types';

const INITIAL_STATE = {
    point: 0,
};

const selectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT':
            return { ...state, point: action.points };
        case 'DESELECT':
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default selectionReducer;
