/**
 * Redux store.
 * Contains all information including: reducers, actions.
 * Redux-Thunk is used so that we can return a function and not an object in actions.
 */

import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import allReducers from './reducer/index';

// these are all of the reducers - matched to exports
const defaultState  = {
    clients: '',
    employees: '',
    employeesIn: '',
    employeesOut: '',
    volunteers: '',
    programs: '',
    report: '',
    user: '',
    volunteerHours: '',
    signInError: ''
};

const store = createStore(allReducers, defaultState, applyMiddleware(thunk));
export const history = syncHistoryWithStore(browserHistory, store);

export default store;