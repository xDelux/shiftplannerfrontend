import { useState } from "react"




export const PopUp = (props) => {
   
   return (props.trigger) ? (
      <div className="fixed top bg-gray-500 bg-opacity-25 w-screen h-screen" id="PopUp-outer">
         <div className="flex bg-white p-3 w-full max-w-lgd " id="PopUp-inner">
            <button className="rounded-full bg-gray-400" onClick={() => props.setTrigger(false)}> X </button>
            {props.children}
         </div>
      </div>
   ) : <div></div>
}