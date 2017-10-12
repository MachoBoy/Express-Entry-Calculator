import {
    TOGGLE,
} from '../actions/types';

const INITIAL_STATE = {
    toggle: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE:
            return { ...state, toggle: !state.toggle };
        default:
            return { ...state, toggle: false };
    }
};
