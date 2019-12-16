import Axios from "axios"
const getCourseApi = async (course_ID) =>{
    const url = 'http://127.0.0.1:8080/courses/' + course_ID; 
    return Axios.get(url) 
}
export {getCourseApi}