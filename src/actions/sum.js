import { WITHSPOUSE_SUM, WITHOUTSPOUSE_SUM } from './types';

export const withSpouseSum = (total) => ({
    type: 'WITHSPOUSE_SUM',
    total,
});

export const withoutSpouseSum = (total) => ({
    type: 'WITHOUTSPOUSE_SUM',
    total,
});
