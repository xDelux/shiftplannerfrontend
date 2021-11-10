import { useState } from 'react'
import { PopUp } from '../PopUp/PopUp'
import { Register } from '../../loginPage/LoginJS'

import { IRegisterProps } from '../../../../shiftplanserver/src/auth'


export const RegisterForm = (props) => {
   const [popUp, setPopUp] = useState(false)
   const [formData, setFormData] = useState<IRegisterProps>({
      username: "",
      password: "",
      confirmPassword: "",
      email: ""
   })
   
   const setPopUpAndClearForm = () => {
      setPopUp(true)
      setFormData(
         {
            username: "",
            password: "",
            confirmPassword: "",
            email: ""
         })
   }
   
   const validateInput = (props) => {
      
   }
   
   const handleChange = (event) =>  {
      const value = event.target.value
      setFormData({
         ...formData,
         [event.target.name]: value
      })
   }
   
   
   const handleSubmit = (event) => {
      event.preventDefault();
      setPopUp(false);
      console.log(formData);
      
      // alert(formData.username + " " + formData.Password)
      
      Register(formData)
   }
   
   return (
      <div>
         <button className="text-white text-xs underline" onClick={setPopUpAndClearForm}>
            {props.children}      
         </button>
         
         <PopUp trigger={popUp} setTrigger={setPopUp} formtype="Create new account">
            
            <div className="flex flex-col pt-4 pb-4 justify-center">
               
               <div className="flex flex-col space-y-8 justify-center items-center font-bold">
                  
                  
                  <form className="flex flex-col space-y-3 items-center"  onSubmit={handleSubmit}>
                     <label className="flex flex-col">
                        Username:
                        <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange} /> 
                     </label>
            
                  
                     <label className="flex flex-col">
                        Password:
                        <input type="password" placeholder="******" name="password" value={formData.password} onChange={handleChange} /> 
                     </label>
                     
                     <label className="flex flex-col">
                        Confirm password:
                        <input type="password" placeholder="******" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /> 
                     </label>
                     
                     <label className="flex flex-col">
                        Email:
                        <input type="email" placeholder="email@site.com" name="email" value={formData.email} onChange={handleChange} /> 
                        <div id="incorrect">  </div>
                     </label>
                     
                     <button className="bg-sky-200 font-bold text-black text-md w-full "type="submit"> Register </button>
                  </form>
               </div>
               
            </div>
         </PopUp>
      </div>
      
      
   )
   
}