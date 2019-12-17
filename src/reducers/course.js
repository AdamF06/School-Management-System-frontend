export const initialState = {
    data: {}
};
const course = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSE_SUCCEEDED':
            return {
                ...state,
                data: action.data.data[0]
            };
        case 'FETCH_COURSE_FAILED':
            return {
                ...state,
            };
        case 'UPDATE_COURSE_SUCCEEDED':
            return {
                ...state,
                data:action.data.data
            };
        case 'UPDATE_COURSE_FAILED':
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default course;

