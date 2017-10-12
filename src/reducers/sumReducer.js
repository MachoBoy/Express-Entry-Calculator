import { WITHSPOUSE_SUM, WITHOUTSPOUSE_SUM } from './types';

const INITIAL_STATE = {
    withspouseSum: [],
    withoutspouseSum: [],
};

const sumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'WITHSPOUSE_SUM':
            return { ...state, withspouseSum: [...state.withspouseSum, action.total] };
        case 'WITHOUTSPOUSE_SUM':
            return { ...state, withoutspouseSum: [...state.withoutspouseSum, action.total] };
        default:
            return state;
    }
};
