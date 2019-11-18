import { fetchCourseApi } from '../apis/students'

export const fetchCourse = () => dispatch => {

  dispatch(fetchCourseRequested());
  fetchCourseApi()
    .then(res => {
      console.log('called from student actions')
      dispatch(fetchCourseSucceeded(res))
    })
    .catch(err =>{
      console.log('falied')
       dispatch(fetchCourseFailed(err))
    });
};

const fetchCourseRequested = () => ({
  type: 'FETCH_REQUESTED'
});

const fetchCourseSucceeded = res => ({
  type: 'FETCH_SUCCEEDED',
  data: res
});

const fetchCourseFailed = err => ({
  type: 'FETCH_FAILED',
  data: { err }
});
