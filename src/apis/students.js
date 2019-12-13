import Axios from "axios"

const fetchCourseApi = async () => {
    const { token, userInfo } = window.localStorage
    const tokenHeader = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const _id = JSON.parse(userInfo)._id
    const url = 'http://127.0.0.1:8080/students/fetchCourse/' + _id;
    
    // return Axios.get(url, tokenHeader)  
    return Axios.get(url, tokenHeader) 
}

const getStudentApi = async () =>{
    const { token, userInfo } = window.localStorage
    const tokenHeader = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const _id = JSON.parse(userInfo)._id
    const url = 'http://127.0.0.1:8080/students/' + _id; 
    return Axios.get(url, tokenHeader) 
}

export {
    fetchCourseApi,
    getStudentApi
}