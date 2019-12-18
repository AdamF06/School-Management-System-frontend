import { auth } from '../apis/auth';
import jwtDecode from 'jwt-decode';

var storage = window.localStorage;

export const authenticate = (login_email,login_password) => dispatch => {

  dispatch(authenticateRequested());
  auth(login_email,login_password)
    .then(res => {
      const { token } = res.data;
      const payload = jwtDecode(token);
      storage.token = token
      storage.userInfo = JSON.stringify(payload) 
      dispatch(authenticateSucceeded(payload))
    })
    .catch(err => dispatch(authenticateFailed(err)));
};

const authenticateRequested = () => ({
  type: 'AUTH_REQUESTED'
});

const authenticateSucceeded = res => ({
  type: 'AUTH_SUCCEEDED',
  data: res
});

const authenticateFailed = err => ({
  type: 'AUTH_FAILED',
  data: { err }
});

export const signOut =()=>{
  return{
    type:'SIGN_OUT'
  }
}