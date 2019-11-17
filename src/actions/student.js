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
