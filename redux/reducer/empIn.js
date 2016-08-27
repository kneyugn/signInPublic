/**
 * Fetches list of employees.
 * @param state of the application.
 * @param action triggered.
 * @returns list of employees, else returns state passed in.
 */
function employeesIn(state = {}, action){
    switch (action.type) {
        case 'FETCH_ARRAY_IN_LIST':
            return Object.assign({}, state.employeesIn, action.payload);
    }
    return state;
}

export default employeesIn