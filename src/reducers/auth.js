export const initialState = {
  user_identity: '',
  user_status: 'offline'

};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCEEDED':
      return {
        ...state,
        user_identity: action.data.identity,
        user_status: 'online'
      };
    case 'AUTH_FAILED':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;

