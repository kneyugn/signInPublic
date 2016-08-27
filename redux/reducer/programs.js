/**
 * Reducer for programs.
 * @param state of application passed in.
 * @param action fired/triggered.
 * @returns list of programs, else returns state.
 */
function programs(state = {}, action){
    switch (action.type) {
        case 'FETCH_PROGRAMS':
            return action.payload;
    }
    return state;
}
export default programs;