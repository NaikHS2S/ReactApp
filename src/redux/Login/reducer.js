import { LOGIN_EVENT, LOGOUT_EVENT } from "../payloads.redux";

const initialState = {
  emailId:null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_EVENT:
      return {
        ...state,
        emailId:action.payload
      }
    case LOGOUT_EVENT:
      return {
        ...state,
        emailId:null
      }

    default:
      return state
  }
}

export default loginReducer