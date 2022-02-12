/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import validator from 'validator';

export const emailValidator = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return (reg.test(text) === false) ? "Is not a correct email" : "";

  }

  export const passwordValidator = (value) => {
    return (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) ? "" : "Is not a strong password";

  }
