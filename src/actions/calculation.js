import {
        SELECT_WITH_SPOUSE,
        DESELECT_ALL,
} from './types';

export const selectWithSpouse = (points, index) => ({
        type: SELECT_WITH_SPOUSE,
        payload: points,
        selectedIndex: index,
});

export const deselectAll = () => ({
        type: DESELECT_ALL,
});

