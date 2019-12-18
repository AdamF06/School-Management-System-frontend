import { combineReducers } from "redux";

import auth from './auth';
import student from './student'
import courseid from './courseid'
import course from './course'
import teacher from './teacher'

export default combineReducers({
    student,
    auth,
    courseid,
    course,
    teacher
});