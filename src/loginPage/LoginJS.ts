import * as React from 'react';
import Axios from 'axios'
// @ts-ignore
import { IFruitData, User, RequestSession } from './../../ShiftplannerServer/src/server'
// import { userContext } from '../Context/userContext';

export const Register = ():void => {
   
   
}

export const Login = async (user: User) => {
   
   const result = (await Axios.post('http://localhost:8080/login', {user}, { withCredentials: true })).data
   // userContext(result);
}