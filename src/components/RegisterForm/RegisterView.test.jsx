import React from 'react'
import { PopUp } from '../PopUp/PopUp'
import {RegisterForm} from './RegisterView'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);


// jest.mock('../PopUp/PopUp', () => (props) => {
// })
// jest.fn('../PopUp/PopUp');
jest.mock('../PopUp/PopUp')

describe('RegisterView', () => {
   test('', () => {
      const {getByTestId} = render(<RegisterForm popValues={true}/>)
      
   
      
      // expect(PopUp).toBeInTheDocument(test)
      
      // expect().toHaveBeenCalledWith(
      //    expect.objectContaining({
      //      trigger: true,
      //    })
      // )  
   })
})