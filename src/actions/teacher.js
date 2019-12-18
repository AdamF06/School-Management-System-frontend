import {getTeachersApi} from '../apis/teachers'

export const getTeacher = () => dispatch => {
    dispatch(fetchTeacherRequested())
    getTeachersApi()
      .then(res => dispatch(fetchTeacherSucceeded(res)))
      .catch(err => dispatch(fetchTeacherFailed(err)))
  };
  
  export const fetchTeacherRequested = () => ({
    type: 'FETCH_TEACHER_REQUESTED'
  });
  
  export const fetchTeacherSucceeded = res => ({
    type: 'FETCH_TEACHER_SUCCEEDED',
    data: res
  });
  
  export const fetchTeacherFailed = err => ({
    type: 'FETCH_TEACHER_FAILED',
    data: { err }
  })