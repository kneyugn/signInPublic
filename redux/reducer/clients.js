/**
 * Reducer for clients.
 * @param state of application,
 * @param action fired
 * @returns list of all clients as payload if action fired,
 * else returns the state passed in.
 */
function clients(state = {}, action){
    switch (action.type) {
        case 'FETCH_CLIENTS':
            return action.payload;
    }
    return state;
}
export default clients;