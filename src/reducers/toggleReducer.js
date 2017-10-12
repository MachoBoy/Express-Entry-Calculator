import {
    TOGGLE,
} from '../actions/types';

const INITIAL_STATE = {
    toggle: false,
};

function toggleReducer(toggleName = '') {
    return function toggle(state = INITIAL_STATE, action) {
        switch (action.type) {
            case `TOGGLE_${toggleName}`:
                return { ...state, toggle: !state.toggle };
            default:
                return { ...state, toggle: false };
        }
    };
}

export default toggleReducer;
