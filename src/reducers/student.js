export const initialState = {
    course:'',
    err:''
};

const student = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCEEDED':
            // return Object.assign({}, state, { course: 'somecourse' });
            return {
                ...state,
                course:'some course',
            };
        case 'FETCH_FAILED':
            // return {
            //     ...state,
            // };
            return Object.assign({}, state, { err: action.data });
        default:
            return state;
    }
};

export default student;

