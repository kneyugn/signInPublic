/**
 * Reducer for user.
 * @param state of application,
 * @param action fired
 * @returns list of all clients as payload if action fired,
 * else returns the state passed in.
 */
function user(state = {}, action){
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        case 'SIGN_OUT_SUCCESSFUL':
            return Object.assign({}, state.user, '')
    }
    return state;
}
export default user;