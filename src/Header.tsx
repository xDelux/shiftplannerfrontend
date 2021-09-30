import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
    return (
        <div className="flex items-center h-20 bg-primary ">
            <div className="w-10 h-10 mx-2 ml-5">
                <MenuIcon type="button" className="hover:text-white fill-current text-gray-400" />
            </div>
            <h1 className="font-bold text-5xl text-white ml-2">ShiftPlanner</h1>
            <div className="absolute right-5 bg-secondary rounded-full py-3 px-8 text-white ml-2...">
                <img 
                className="rounded-full h-8 w-8 flex left-2"
                src="https://i.pinimg.com/280x280_RS/52/26/24/5226243d63b89badf9a7eaec2b4dc902.jpg"></img>
            </div>
            <div className="container:"></div>
        </div>
    )
}
