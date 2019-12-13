export const initialState = {
    info:{},
    course: [],
    testCourse:[],
    err: ''
};

const student = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCEEDED':
            return {
                ...state,
                course: action.data.data,
            };
        case 'FETCH_FAILED':
            return {
                ...state,
            };
        case 'FETCH_STUDENT_SUCCEEDED':
            return {
                ...state,
                info: action.data.data,
                testCourse:action.data.data.course
            };
        case 'FETCH_STUDENT_FAILED':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default student;

