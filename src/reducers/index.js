import { createStore, combineReducers } from 'redux';
import { subspace, namespaced } from 'redux-subspace';
import selectionReducer from './selectionReducer';
import toggleReducer from './toggleReducer';

const reducers = combineReducers({
    // core withSpouse reducer
    withSpouseAge: namespaced('withSpouseAge')(selectionReducer),
    withSpouseLoe: namespaced('withSpouseLoe')(selectionReducer),
    withSpouseOlp: namespaced('withSpouseOlp')(selectionReducer),
    withSpouseOlp2: namespaced('withSpouseOlp2')(selectionReducer),
    withSpouseExp: namespaced('withSpouseExp')(selectionReducer),
    // core withoutSpouse reducer
    withoutSpouseAge: namespaced('withoutSpouseAge')(selectionReducer),
    withoutSpouseLoe: namespaced('withoutSpouseLoe')(selectionReducer),
    withoutSpouseOlp: namespaced('withoutSpouseOlp')(selectionReducer),
    withoutSpouseOlp2: namespaced('withoutSpouseOlp2')(selectionReducer),
    withoutSpouseExp: namespaced('withoutSpouseExp')(selectionReducer),
    // Spouse factor reducer
    BwithSpouseLoe: namespaced('BwithSpouseLoe')(selectionReducer),
    BwithSpouseOlp: namespaced('BwithSpouseOlp')(selectionReducer),
    BwithSpouseExp: namespaced('BwithSpouseExp')(selectionReducer),
    // skill transferability factors
    skillEducation1: namespaced('skillEducation1')(selectionReducer),
    skillEducation2: namespaced('skillEducation2')(selectionReducer),
    skillFwe1: namespaced('skillFwe1')(selectionReducer),
    skillFwe2: namespaced('skillFwe2')(selectionReducer),
    skillCertificate: namespaced('skillCertificate')(selectionReducer),
    // Additional
    additional: namespaced('additional')(selectionReducer),
    activeIndexNumber: selectionReducer,
    // Toggle
    progressToggle: toggleReducer('progress'),
    deselectAll: selectionReducer,
});

export default reducers;
