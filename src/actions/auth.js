import { auth } from '../apis/auth';
import jwtDecode from 'jwt-decode';

export const authenticate = () => dispatch => {
    dispatch(authenticateRequested());
    auth()
      .then(res => { 
          const { token } = res.data;
          const payload = jwtDecode(token);
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