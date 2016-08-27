/**
 * Fetches list of volunteers who have signed in.
 * @param state of the application.
 * @param action triggered.
 * @returns new state, list of volunteers.
 */
function volunteers(state = {}, action){
    switch (action.type) {
        case 'FETCH_VOLUNTEERS':
            return action.payload;
    }
    return state;
}

export default volunteers