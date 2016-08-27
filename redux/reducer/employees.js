/**
 * Fetches list of employees.
 * @param state of the application.
 * @param action triggered.
 * @returns list of employees, else returns state passed in.
 */
function employees(state = {}, action){
    switch (action.type) {
        case 'FETCH_EMPLOYEES':
            return Object.assign({}, state.employees, action.payload);
    }
    return state;
}

export default employees