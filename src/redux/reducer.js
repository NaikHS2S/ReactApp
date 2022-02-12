
export const LOGIN_EVENT = 'LOGIN_EVENT'
export const LOGOUT_EVENT = 'LOGOUT_EVENT'

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

const rootReducer = (state = initialState, action) => {
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

export default rootReducer