import { fetchCourseApi } from '../apis/students'

export const fetchCourse = (fcq,fcs,fcf) => dispatch => {
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



