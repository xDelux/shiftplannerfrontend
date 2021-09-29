import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
    return (
        <div className="flex items-center h-20 bg-primary ">
            <div className="w-10 h-10 mx-2 ml-5">
                <MenuIcon type="button" className="hover:text-white fill-current text-gray-400" />
            </div>
            <h1 className="font-bold text-5xl text-white ml-2">ShiftPlanner</h1>
            <div className="container:"></div>
        </div>
    )
}
