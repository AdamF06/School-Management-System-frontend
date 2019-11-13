export const initialState = {
  user: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCEEDED':
      return {
        ...state,
        user: action.data
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