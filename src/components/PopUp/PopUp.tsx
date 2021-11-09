import { useState } from "react"




export const PopUp = (props) => {
   
   return (props.trigger) ? (
      <div className="" id="PopUp-outer">
         <div className="" id="PopUp-inner">
            <button className="flex rounded-full bg-gray-400" onClick={() => props.setTrigger(false)}> X </button>
            {props.children}
         </div>
      </div>
   ) : <div></div>
}