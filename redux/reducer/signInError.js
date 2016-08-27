/**
 * Reducer for signInError.
 * @param state of application,
 * @param action fired
 * @returns list of all clients as payload if action fired,
 * else returns the state passed in.
 */
function signInError(state = {}, action){
    switch (action.type) {
        case 'SIGN_IN_ERROR':
            return action.payload;
    }
    return state;
}
export default signInError;