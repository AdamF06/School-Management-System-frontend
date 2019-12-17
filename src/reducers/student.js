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
            console.log(action.data.data,"at reducer")
            return {
                ...state,
                info: action.data.data,
                course: action.data.data.course
            };
        case 'UPDATE_STUDENT_FAILED':
            return {
                ...state,
            };

        case 'UPLOAD_STUDENT_AVATAR__FAILED':
            console.log('filed')
            return {
                ...state,
            };
        case 'UPLOAD_STUDENT_FILE__FAILED':
            console.log('filed')
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default student;

