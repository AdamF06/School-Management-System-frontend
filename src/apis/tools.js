import Axios from "axios"
const uploadAvatar = async (data) => {
    const url = 'http://127.0.0.1:8080/upload';
    return Axios.post(url,data)
}
export {
    uploadAvatar
}