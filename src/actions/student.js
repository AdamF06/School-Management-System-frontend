import { fetchCourseApi } from '../apis/students'
import { connect } from 'react-redux';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';


export const fetchCourse = (fcq,fcs,fcf) => dispatch => {
  // console.log('from fetchCourse');
  // dispatch(fetchCourseRequested());
  fcq();
  fetchCourseApi()
    .then(res => {
      console.log('called from student action')
      // dispatch(fetchCourseSucceeded(res))
      fcs();
    })
    .catch(err =>{
      console.log('falied')
      //  dispatch(fetchCourseFailed(err))
      fcf();
    });
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



