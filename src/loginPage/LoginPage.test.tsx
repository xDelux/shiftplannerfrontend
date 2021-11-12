import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { LoginPage } from './LoginPage';
import UserContextProvider from '../Context/UserContext';
import { authUser } from '../../../shiftplanserver/src/Types'
import exp = require("constants");
import {Header} from "../Header";

afterEach(cleanup);

// jest.mock('../Context/UserContext', () => {
// })

describe("Render loginpage", () => {
   test("Checking if UserContext gets set", () => {  
      const user: authUser = {
         id: '',
         role: false,
         loggedOn: false
      }

      //check if the loginpage could render
      render(<UserContextProvider> <LoginPage /> </UserContextProvider>)

      //check if the sign in is clickable
      const signIn = fireEvent.click(screen.getByText("Sign In"))
      expect(signIn).toBe(true)
      
   })
})

describe("Login Page Axios request", () => {
   test("", () => {
      
   })
})


//virker ikke
describe("", () => {
   const login = require('./login');

   test('is logged in', () => {
      const spy = jest.spyOn(login, 'login');
      const isLoggedin =

      expect(spy).toHaveBeenCalled();
      expect(isLoggedin).toBe(true);

      spy.mockRestore();
   });
})

// Dark mode
/*describe("Checks darkmode function", () => {
   test("switch between dark and light mode", () => {
      const switch = fireEvent.click(applyTheme
      screen.findByDisplayValue(light))
      expect(switch).toBeEnabled()
   })
})*/

// go to page which require login
describe("", () => {
   test("go to mine vagter", () => {

      const user: authUser = {
         id: '',
         role: true,
         loggedOn: true
      }
      const login = require('./login');

      const myShifts = fireEvent.click(screen.getByText('Mine vagter'))
      if (myShifts){
         expect(user.loggedOn).toBe(true)
      }
   })
})

//template
describe("", () => {
   test("", () => {

   })
})