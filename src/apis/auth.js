import Axios from "axios"
const STUDENT = 'http://127.0.0.1:8080/students/login';
const TEACHER = 'http://127.0.0.1:8080/teachers/login';


const authStudent = (login_email,login_password) => {
    //return Axios.post(url, {email: login_email, password: login_password})
    return Axios.post(STUDENT, {email: "test@qq.com", password: '1234567'})

}
const authTeacher = (login_email,login_password) => {
    //return Axios.post(url, {email: login_email, password: login_password})
    return Axios.post(TEACHER, {email: "teacher1@qq.com", password: '123456'})

}
export {
    authStudent,
    authTeacher
}