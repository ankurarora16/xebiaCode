let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
    localStorage.setItem('user', JSON.stringify(action.user));
      return {
        loggingIn: true,
        user: action.user
      };
    case "LOGIN_FAILURE":
      return {};
    case "LOGOUT":
        localStorage.removeItem('user');
      return {};
    default:
      return state;
  }
}