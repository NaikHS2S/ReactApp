import { LOGIN_EVENT, LOGOUT_EVENT } from "./payloads.redux"

export const loginEvent = emailId => ({
  type: LOGIN_EVENT,
  payload: emailId
})

export const logoutEvent = emailId => ({
  type: LOGOUT_EVENT,
  payload:emailId
})

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