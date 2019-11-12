export function changeUserStatus({ status }) {
    return {
        type: "CHANGE_USER_STATUS", 
        status
    };
}
export function setUserIdentity({ identity }) {
    return {
        type: "SET_USER_IDENTITY", 
        identity
    };
}