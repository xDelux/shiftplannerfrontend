import * as React from 'react';
import Axios from 'axios'
// @ts-ignore
import { IRegisterProps } from '../../../shiftplanserver/src/auth'
// import { userContext } from '../Context/userContext';

export const Register = async (formData: IRegisterProps) => {
   try {
      console.log(formData)
      const result = (await Axios.post('http://localhost:8080/register', {formData}, { withCredentials: true })).data
      console.log(result)
      return true;
   } catch(err) {
      alert("Something went wrong with Post Req! : " + err)
      return false;
   }
}

export const Login = async (user) => {
   
   const result = (await Axios.post('http://localhost:8080/login', {user}, { withCredentials: true })).data
   // userContext(result);
}