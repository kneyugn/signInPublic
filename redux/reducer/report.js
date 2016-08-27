/**
 * Fetches report.
 * @param state of the application.
 * @param action triggered.
 * @returns new state.
 */
function report(state = {}, action){
    switch (action.type) {
        case 'FETCH_REPORT':
            return action.payload;
        case 'FETCH_REPORT_CUSTOM':
            return Object.assign({}, state.report, action.payload)
    }
    return state;
}

export default report;