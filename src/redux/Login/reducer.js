import { LOGIN_EVENT, LOGOUT_EVENT } from "../payloads.redux";

const initialState = {
  loginStatus: false,
  emailId:""
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_EVENT:
      return {
        ...state,
        loginStatus: true,
        emailId:action.payload
      }
    case LOGOUT_EVENT:
      return {
        ...state,
        loginStatus: false,
        emailId:""
      }

    default:
      return state
  }
}

export default loginReducer