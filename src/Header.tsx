import MenuIcon from '@mui/icons-material/Menu'
import React, {useCallback, useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Switch} from "@mui/material";



export const Header = (props) => {
    let [expanded, setExpanded] = useState(false);
    let [darkMode, setDarkMode] = useState(false);


    return (

        <div className="flex items-center h-20 dark:bg-primary ">
            <div className="w-10 h-10 mx-2 ml-5">
                <button type="button" onClick={() => props.burgerMenuOnClick(!props.collapsed)}>
                    <MenuIcon fontSize="large" className="hover:text-white fill-current text-gray-400 h-20"/>
                </button>
            </div>
            <h1 className="font-bold text-5xl dark:text-white ml-2">ShiftPlanner</h1>
            <div className="flex flex-grow"></div>

            <div className="flex flex-row items-center bg-gray-700 dark:bg-secondary rounded-full py-1 text-white mx-2 mb-2 justify-self-end">
                <img
                    className="flex bg-primary rounded-full mx-2 h-8 w-8"
                    src="https://i.pinimg.com/280x280_RS/52/26/24/5226243d63b89badf9a7eaec2b4dc902.jpg"
                />
                <div className="flex flex-col text-gray-300 pl-1">
                    <p className="text-sm">Shania Hau</p>
                    <p className="text-xs">Administator</p>
                </div>
                <button className="flex px-2" onClick={() => setExpanded(!expanded)}>
                    <KeyboardArrowDownIcon/>
                </button>
                {
                    expanded
                        ? (
                            <div  className="absolute grid grid-cols-1 gap-4 top-20 mb-2 right-3 bg-primary rounded-sm border-b-2 transition duration-500 ease-in-out">
                                    <div className="p-4 hover:bg-secondary"><button><PersonIcon className="inline-block align-middle"/>Min profil</button></div>
                                    <div className="p-4 hover:bg-secondary"><button><SettingsIcon/>Indstillinger</button></div>
                                    <div className="p-3 hover:bg-secondary"><DarkModeIcon/>Dark mode<Switch/></div>
                            </div> )
                        : null
                }

            </div>

        </div>


    )
}
