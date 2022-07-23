import { LOGIN_EVENT, LOGOUT_EVENT } from "../payloads.redux";
import axios from 'axios';

export const updateLoginSuccess = (emailId) => async (dispatch) => {

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'dummy login',
            body: emailId,
            userId: 1,
        });

        if (response?.data?.body?.value) {
            console.log(response.data);
            dispatch({
                type: LOGIN_EVENT,
                payload: response?.data?.body?.value,
            });
            return response.data;
        } else {
            return { error: error.message ??  'Error' };
        }
    } catch (ex) {
        return { error: JSON.stringify(ex) };
    }
};

export const updateLogoutSuccess = (emailId) => async (dispatch) => {
    await dispatch({
        type: LOGOUT_EVENT,
        payload: emailId
    })
};