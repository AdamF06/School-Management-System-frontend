export const initialState = {
    info: {},
    course: [],
    err: ''
};

const student = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STUDENT_SUCCEEDED':
            return {
                ...state,
                info: action.data.data,
                course: action.data.data.course
            };
        case 'FETCH_STUDENT_FAILED':
            return {
                ...state,
            };
        case 'UPDATE_STUDENT_SUCCEEDED':
            return {
                ...state,
                info: action.data.data,
                course: action.data.data.course
            };
        case 'UPDATE_STUDENT_FAILED':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default student;

