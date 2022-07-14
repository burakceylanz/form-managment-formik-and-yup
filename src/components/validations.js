import {object, string} from 'yup'
import * as Yup from 'yup';

let validations = object({ 
    email: string().email().required(),
    password:string().min(5).required(),
    passwordConfirm:string().oneOf([Yup.ref('password')]).required()
  });

  
export default validations;
