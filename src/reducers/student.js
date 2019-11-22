export const initialState = {
    course:[],
    err:''
};

const student = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCEEDED':
            return {
                ...state,
                course:action.data.data,
            };
        case 'FETCH_FAILED':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default student;

