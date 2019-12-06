import { SET_CURRENT_COURSE_ID } from '../constant/actionTypes'

export const courseid = (state = { id:''}, action) => {
    switch (action.type) {
        case SET_CURRENT_COURSE_ID:
            return Object.assign({}, state, { id: action.id });

        default:
            return state;
    }
};

export default courseid;