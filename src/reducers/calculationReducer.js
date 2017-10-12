import {
    SELECT_WITH_SPOUSE,
    DESELECT_ALL,
} from '../actions/types';

const INITIAL_STATE = {
    points: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_WITH_SPOUSE:
            return { ...state, 
                points: state.points + action.payload,
            };
        case DESELECT_ALL:
            return INITIAL_STATE;
        default:
            return state;
    }
};

