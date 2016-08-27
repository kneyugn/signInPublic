/**
 * Reducer for total hours.
 * @param state of application,
 * @param action fired
 * @returns list of all clients as payload if action fired,
 * else returns the state passed in.
 */
function volunteerHours(state = {}, action){
    switch (action.type) {
        case 'GET_VOLUNTEER_HOURS':
            return action.payload;
    }
    return state;
}
export default volunteerHours;