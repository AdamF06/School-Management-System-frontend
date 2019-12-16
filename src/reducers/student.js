export const initialState = {
    info: {},
    course: [],
    avatarKey:'',
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
        case 'UPLOAD_STUDENT_AVATAR_SUCCEEDED':
            const avatarKey = action.data.data.key.split("/").pop()
            // console.log('success',avatarKey)
            return {
                ...state,
                avatarKey  
            };
        case 'UPLOAD_STUDENT_AVATAR__FAILED':
            console.log('filed')
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default student;

