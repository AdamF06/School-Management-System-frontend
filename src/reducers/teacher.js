export const initialState = {
    info: {},
    course: [],
    err: '',

};

const teacher = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TEACHER_SUCCEEDED':
            return {
                ...state,
                info: action.data.data,

                //info: action.data.data,
                course: action.data.data.course
            };
        case 'FETCH_TEACHER_FAILED':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default teacher;

