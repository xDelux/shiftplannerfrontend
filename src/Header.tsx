import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Header = () => (
    <div className="flex items-center h-20 bg-primary ">
        <div className="w-10 h-10 mx-2 ml-5">
            <MenuIcon className="hover:text-white fill-current text-gray-400"/>
        </div>
        <h1 className="font-bold text-5xl text-white ml-2">ShiftPlanner</h1>
        <div className="flex flex-grow"></div>

        <div className="flex flex-row items-center bg-secondary rounded-full py-1 text-white mx-2 mb-2 justify-self-end">
            <img
                className="flex bg-primary rounded-full mx-2 h-8 w-8"
                src="https://i.pinimg.com/280x280_RS/52/26/24/5226243d63b89badf9a7eaec2b4dc902.jpg"
            ></img>
            <div className="flex flex-col text-xs text-gray-300 pl-1">
                <text>Shania Hau</text>
                <text>Administator</text>
            </div>
            <button className="flex px-2">
                <KeyboardArrowDownIcon/>
            </button>

        </div>
    </div>
)
