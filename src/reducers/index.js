import { combineReducers } from "redux";

import auth from './auth';
import student from './student'
import courseid from './courseid'
import course from './course'

export default combineReducers({
    student,
    auth,
    courseid,
    course
});