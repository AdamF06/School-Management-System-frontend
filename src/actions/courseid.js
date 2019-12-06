import {SET_CURRENT_COURSE_ID} from '../constant/actionTypes'

export function setCurrentCourseId({ id }) {
    return {
        type: SET_CURRENT_COURSE_ID,
        id
    };
}