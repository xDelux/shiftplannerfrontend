import { useState } from "react"




export const PopUp = (props) => {
   
   return (props.trigger) ? (
      <div className="fixed flex top-0 left-0 justify-center items-center bg-gray-500 bg-opacity-25 w-screen h-screen" id="PopUp-outer">
         <div className="relative flex flex-col flex-shrink bg-white p-3 w-1/6 rounded " id="PopUp-inner">
         <button className="absolute w-8 h-8 right-0 top-0 border-black rounded  font-bold"onClick={() => props.setTrigger(false)}> X </button>
            
            <div className="flex flex-col justify-center items-center ">
               <span className="font-bold text-xl text-black p-2 rounded"> {props.formtype} </span>
         
               {props.children}
            </div>
         </div>
      </div>
   ) : (<> </>)
}