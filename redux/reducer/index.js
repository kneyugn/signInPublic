/**
 * Conveniently combines all reducers into one reducer
 * to be passed into the redux store.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clients from './clients';
import employees from './employees';
import employeesIn from './empIn';
import employeesOut from './empOut';
import programs from './programs';
import volunteers from './volunteers';
import report from './report';
import user from './user';
import volunteerHours from './volunteerHours';
import signInError from './signInError';

const allReducers = combineReducers({
    report, volunteers, programs, clients,
    employees, employeesIn, employeesOut,
    user, volunteerHours, signInError,
    routing: routerReducer
});

export default allReducers;