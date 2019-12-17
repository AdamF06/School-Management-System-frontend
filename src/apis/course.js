import Axios from "axios"
const getCourseApi = async (course_ID) =>{
    const url = 'http://127.0.0.1:8080/courses/' + course_ID; 
    return Axios.get(url) 
}
const updateCourseApi = async (course_id,data) =>{
    const url = 'http://127.0.0.1:8080/courses/' + course_id; 
    return Axios.put(url,data) 
}
export {
    getCourseApi,
    updateCourseApi
}