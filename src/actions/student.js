import { getStudentApi} from '../apis/students'

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

