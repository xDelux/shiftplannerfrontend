import MenuIcon from '@mui/icons-material/Menu'
import React, {useCallback, useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Switch} from "@mui/material";
import {useHistory} from "react-router-dom";



export const Header = (props) => {
    let [expanded, setExpanded] = useState(false);
    let [theme, setTheme] = useState('light');
    const history = useHistory()
    let newTheme;
    const root = window.document.documentElement;

    export function applyTheme() {
        newTheme = theme === 'light' ? 'dark' : 'light';
        root.classList.remove(theme);
        root.classList.add(newTheme)
        setTheme(newTheme);
    }

    return (

        <div className="flex items-center h-20 bg-lightPrimary dark:bg-primary transition duration-500 ease-in-out">
            <div className="w-10 h-10 mx-2 ml-5">
                <button type="button" onClick={() => props.burgerMenuOnClick(!props.collapsed)}>
                    <MenuIcon fontSize="large" className="hover:text-white fill-current text-gray-300 h-20"/>
                </button>
            </div>
            <h1 className="font-bold text-5xl text-white ml-2">ShiftPlanner</h1>
            <div className="flex flex-grow"></div>

            <div className="flex flex-row items-center bg-gray-100 dark:bg-secondary rounded-full py-1 text-black dark:text-white mx-2 mb-2 justify-self-end transition duration-500 ease-in-out">
                <img
                    className="flex bg-primary rounded-full mx-2 h-8 w-8"
                    src="https://i.pinimg.com/280x280_RS/52/26/24/5226243d63b89badf9a7eaec2b4dc902.jpg"
                />
                <div className="flex flex-col pl-1">
                    <p className="text-sm">Shania Hau</p>
                    <p className="text-xs">Administator</p>
                </div>
                <button className="flex px-2" onClick={() => setExpanded(!expanded)}>
                    <KeyboardArrowDownIcon/>
                </button>


            </div>
            {
                expanded
                    ? (
                        <div  className="absolute grid grid-cols-1 top-20 right-3 bg-lightSecondary dark:bg-primary rounded-sm border-l-2 border-r-2 border-b-2 text-white transition duration-500 ease-in-out">
                            <div className="p-4 hover:bg-lightPrimary dark:hover:bg-secondary"><button onClick={() => history.push(`/myprofile`)}><PersonIcon/>Min profil</button></div>
                            <div className="p-4 hover:bg-lightPrimary dark:hover:bg-secondary"><button onClick={() => history.push(`/settings`)}><SettingsIcon/>Indstillinger</button></div>
                            <div className="p-2.5 hover:bg-lightPrimary dark:hover:bg-secondary"><DarkModeIcon/>Dark mode <Switch className="p-0" onClick={() => applyTheme()}/></div>
                        </div> )
                    : null
            }
        </div>


    )
}
