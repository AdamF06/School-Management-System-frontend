const initialState = {
    identity:'',
    status:'offline'
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_USER_STATUS":
            return Object.assign({}, state, { status: action.status });
        case "SET_USER_IDENTITY":
            return Object.assign({}, state, { identity: action.identity });
        default:
            return state;
    }
};
export default user;