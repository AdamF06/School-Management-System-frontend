import {
  getCourseApi,
  updateCourseApi
} from '../apis/course'
import { uploadFiles } from '../apis/tools'

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
export const updateCourse = (course_id, student_data) => dispatch => {
  dispatch(updateCourseRequested())
  console.log(student_data)
  updateCourseApi(course_id, { student: student_data })
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

//upload files of course, eg assignment, module  
export const uploadCourse = (data, _id, assignment, no) => dispatch => {
  console.log(data)
  uploadFiles(data)
    .then(res => {
      console.log(res.data)  
      assignment[no - 1].key = res.data.key
      updateCourseApi(_id, { assignment })
    })
    .catch(err => dispatch(uploadCourseFailed(err)))
};

export const uploadCourseSucceeded = res => ({
  type: 'UPLOAD_COURSE_SUCCEEDED',
  data: res
});

export const uploadCourseFailed = err => ({
  type: 'UPLOAD_COURSE_FAILED',
  data: { err }
});
