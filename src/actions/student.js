import {
  getStudentApi,
  updateStudentApi
} from '../apis/students'
import { uploadAvatar, uploadFiles } from '../apis/tools'
import { updateCourse } from '../actions'
import { updateCourseApi } from '../apis/course';
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
    .then(res => dispatch(updateStudent({ avatar: res.data.key.split("/").pop() })))
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
export const uploadStudentAssignment = (files, id, type, no, old_assignment) => dispatch => {
  dispatch(uploadStudentAssignmentRequested())
  uploadFiles(files)
    .then(res => {
      const name = id + type + no
      const assignment = { name, key: res.data.key.split("/").pop() }
      let new_assignment = []
      old_assignment.forEach((item) => {
        if (item.name !== name) {
          new_assignment.push(item)
        }
      })
      new_assignment.push(assignment)
      dispatch(updateStudent({ assignment: new_assignment }))
    }
    )
    .catch(err => dispatch(uploadStudentAssignmentFailed(err)))
};

export const uploadStudentAssignmentRequested = () => ({
  type: 'UPLOAD_STUDENT_FILE_REQUESTED'
});

export const uploadStudentAssignmentFailed = err => ({
  type: 'UPLOAD_STUDENT_FILE_FAILED',
  data: { err }
});

//enroll a new course
export const enroll = (enrolled, courses, student_data, _id) => dispatch => {
  const enrolledID = enrolled.course_ID
  const course = courses.map((item) => item.course_ID)
  let has = false
  course.forEach((item) => { if (item === enrolledID) { has = true } })
  if (has) {
    dispatch(enrollFailed("You allready have this course!"))
  } else {
    courses.push(enrolled)
    updateStudentApi({ course: courses })
      .then(res => dispatch(enrollSucceeded(res)))
      .catch(err => dispatch(enrollFailed(err)))
    dispatch(updateCourse(_id, student_data))
  }
};

export const enrollSucceeded = res => ({
  type: 'ENROLL_SUCCEEDED',
  data: res
});

export const enrollFailed = err => ({
  type: 'ENROLL_FAILED',
  data: { err }
});