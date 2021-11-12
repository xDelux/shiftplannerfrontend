import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { LoginPage } from './LoginPage';
import UserContextProvider from '../Context/UserContext';
import { authUser } from '../../../shiftplanserver/src/Types'

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
      
      render(<UserContextProvider> <LoginPage /> </UserContextProvider>)
      
      const signIn = fireEvent.click(screen.getByText("Sign In"))
      
      
      expect(signIn).toBe(true)
      
   })
})

describe("Login Page Axios request", () => {
   test("", () => {
      
   })
})


describe("", () => {
   test("", () => {
      
   })
})
