import {
  getCourseApi,
  updateCourseApi
} from '../apis/course'

export const getCourse = (course_ID) => dispatch => {
  dispatch(fetchCourseRequested())
  getCourseApi(course_ID)
    .then(res => dispatch(fetchCourseSucceeded(res)))
    .catch(err => dispatch(fetchCourseFailed(err)))
};

export const fetchCourseRequested = () => ({
  type: 'FETCH_COURSE_REQUESTED'
});

export const fetchCourseSucceeded = res => ({
  type: 'FETCH_COURSE_SUCCEEDED',
  data: res
});

export const fetchCourseFailed = err => ({
  type: 'FETCH_COURSE_FAILED',
  data: { err }
});

//update course : add student info into course
export const updateCourse = (course_id,student_data) => dispatch => {
  dispatch(updateCourseRequested())
  console.log(student_data)
  updateCourseApi(course_id,{student:student_data})
    .then(res => dispatch(updateCourseSucceeded(res)))
    .catch(err => dispatch(updateCourseFailed(err)))
};

export const updateCourseRequested = () => ({
  type: 'UPDATE_COURSE_REQUESTED'
});

export const updateCourseSucceeded = res => ({
  type: 'UPDATE_COURSE_SUCCEEDED',
  data: res
});

export const updateCourseFailed = err => ({
  type: 'UPDATE_COURSE_FAILED',
  data: { err }
});