/**
 * Fetches list of employees.
 * @param state of the application.
 * @param action triggered.
 * @returns list of employees, else returns state passed in.
 */
function employeesOut(state = {}, action){
    switch (action.type) {
        case 'FETCH_EMPLOYEES_OUT':
            return Object.assign({}, state.employeesOut, action.payload);
    }
    return state;
}

export default employeesOut