import { combineReducers } from "redux";
import student from "./student";
import auth from './auth';

export default combineReducers({
    student,
    auth,
});