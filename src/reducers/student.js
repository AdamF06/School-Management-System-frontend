const initialState = {
    identity:'',
    status:'offline',
    _id:'',
    course:[]
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_STUDENT_STATUS":
            return Object.assign({}, state, { status: action.status });
        case "SET_STUDENT_IDENTITY":
            return Object.assign({}, state, { identity: action.identity });
        case "GET_STUDENT_ID":
            return Object.assign({}, state, { _id: action._id });
        default:
            return state;
    }
};
export default user;