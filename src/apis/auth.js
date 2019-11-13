import Axios from "axios"
const url = 'http://127.0.0.1:8080/students/login';

const auth = () => {
    return Axios.post(url, {email: 'test@qq.com', password: '1234567'})
}

export {
    auth
}