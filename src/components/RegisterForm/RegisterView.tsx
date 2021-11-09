import React, { useState } from 'react'
import { PopUp } from '../PopUp/PopUp'



export const RegisterForm = (props) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [popUp, setPopUp] = useState(false)
   
   
   return (
      <div>
         <button className="text-white text-xs underline" onClick={() => setPopUp(true)}>
            {props.children}      
         </button>
         <PopUp trigger={popUp} setTrigger={setPopUp}>
            <p> TESTER </p>
         </PopUp>
      </div>
      
      
   )
   
}