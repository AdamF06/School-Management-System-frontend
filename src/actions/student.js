import { 
  getStudentApi,
  updateStudentApi
} from '../apis/students'
import {uploadAvatar, uploadFiles} from '../apis/tools'
//fetch student info
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

//update student basic info
export const updateStudent = (field) => dispatch => {
  dispatch(updateStudentRequested())
  updateStudentApi(field)
    .then(res => dispatch(updateStudentSucceeded(res)))
    .catch(err => dispatch(updateStudentFailed(err)))
};

export const updateStudentRequested = () => ({
  type: 'UPDATE_STUDENT_REQUESTED'
});

export const updateStudentSucceeded = res => ({
  type: 'UPDATE_STUDENT_SUCCEEDED',
  data: res
});

export const updateStudentFailed = err => ({
  type: 'UPDATE_STUDENT_FAILED',
  data: { err }
});

//upload avatar
export const uploadStudentAvatar = (avatar) => dispatch => {
  dispatch(uploadStudentAvatarRequested())
  uploadAvatar(avatar)
    .then(res =>dispatch(updateStudent({avatar:res.data.key.split("/").pop()})))
    .catch(err => dispatch(uploadStudentAvatarFailed(err)))
};

export const uploadStudentAvatarRequested = () => ({
  type: 'UPLOAD_STUDENT_AVATAR_REQUESTED'
});

export const uploadStudentAvatarFailed = err => ({
  type: 'UPLOAD_STUDENT_AVATAR_FAILED',
  data: { err }
});

//upload assignment 
export const uploadStudentAssignment = (files,id,type,no) => dispatch => {
  dispatch(uploadStudentAssignmentRequested())
  uploadFiles(files)
    .then(res =>dispatch(
      updateStudent(
      {
        assignment:{
          name:id+type+no,
          key:res.data.key.split("/").pop()
        }
    })))
    .catch(err => dispatch(uploadStudentAssignmentFailed(err)))
};

export const uploadStudentAssignmentRequested = () => ({
  type: 'UPLOAD_STUDENT_FILE_REQUESTED'
});

export const uploadStudentAssignmentFailed = err => ({
  type: 'UPLOAD_STUDENT_FILE_FAILED',
  data: { err }
});