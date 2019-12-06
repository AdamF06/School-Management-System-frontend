import { combineReducers } from "redux";
import auth from './auth';
import student from './student'
import courseid from './courseid'

export default combineReducers({
    student,
    auth,
    courseid
});