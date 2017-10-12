import {
    SELECT,
    DESELECT,
} from './types';

export const select = (points) => ({
    type: 'SELECT',
    points,
});

export const deselect = () => ({
    type: 'DESELECT',
});
