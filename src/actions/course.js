import {getCourseApi} from '../apis/course'

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