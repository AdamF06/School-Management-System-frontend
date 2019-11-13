import Axios from "axios";

export function changeStudentStatus({ status }) {
    return {
        type: "CHANGE_STUDENT_STATUS", 
        status
    };
}
export function setStudentIdentity({ identity }) {
    return {
        type: "SET_STUDENT_IDENTITY", 
        identity
    };
}
export function getStudentId({ _id }) {
    return {
        type: "GET_STUDENT_ID", 
        _id
    };
}
/**
 * await axios({
                url: 'http://127.0.0.1:8080/students/login',
                method: 'post',
                data: { email: 'test@qq.com', password: '1234567' }
            })
 */
// export function fetchUser() {
//     return function(dispatch) {
//         //dispatch()
//         return Axios({
//                 url: 'http://127.0.0.1:8080/students/login',
//                 method: 'post',
//                 data: { email: 'test@qq.com', password: '1234567' }
//             })
//             .then(res => {
//                 console.log(res)
//             });
//     }
// }