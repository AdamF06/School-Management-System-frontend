import {
  fetchCourseApi,
  getStudentApi
} from '../apis/students'

export const fetchCourse = () => dispatch => {
  dispatch(fetchCourseRequested())
  fetchCourseApi()
    .then(res => dispatch(fetchCourseSucceeded(res)))
    .catch(err => dispatch(fetchCourseFailed(err)))
};

export const fetchCourseRequested = () => ({
  type: 'FETCH_REQUESTED'
});

export const fetchCourseSucceeded = res => ({
  type: 'FETCH_SUCCEEDED',
  data: res
});

export const fetchCourseFailed = err => ({
  type: 'FETCH_FAILED',
  data: { err }
});
//fetch all info

export const getStudent = () => dispatch => {
  dispatch(fetchStudentRequested())
  getStudentApi()
    .then(res => dispatch(fetchStudentSucceeded(res)))
    .catch(err => dispatch(fetchStudentFailed(err)))
};

export const fetchStudentRequested = () => ({
  type: 'FETCH_STUDENT_REQUESTED'
});

export const fetchStudentSucceeded = res => ({
  type: 'FETCH_STUDENT_SUCCEEDED',
  data: res
});

export const fetchStudentFailed = err => ({
  type: 'FETCH_STUDENT_FAILED',
  data: { err }
});

