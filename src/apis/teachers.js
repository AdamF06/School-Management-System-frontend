import Axios from "axios"
const getTeachersApi = async () =>{
    const { token, userInfo } = window.localStorage
    const tokenHeader = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const _id = JSON.parse(userInfo)._id
    const url = 'http://127.0.0.1:8080/teachers/' + _id; 
    return Axios.get(url, tokenHeader) 
}
export{getTeachersApi}