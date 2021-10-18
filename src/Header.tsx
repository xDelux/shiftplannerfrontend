import MenuIcon from '@mui/icons-material/Menu'
import React, {useCallback, useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';



export const Header = (props) => {
    let [expanded, setExpanded] = useState(false);


    return (

        <div className="flex items-center h-20 bg-primary ">
            <div className="w-10 h-10 mx-2 ml-5">
                <button type="button" onClick={() => props.burgerMenuOnClick(!props.collapsed)}>
                    <MenuIcon fontSize="large" className="hover:text-white fill-current text-gray-400 h-20"/>
                </button>
            </div>
            <h1 className="font-bold text-5xl text-white ml-2">ShiftPlanner</h1>
            <div className="flex flex-grow"></div>

            <div className="flex flex-row items-center bg-secondary rounded-full py-1 text-white mx-2 mb-2 justify-self-end">
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
                            <div  className="absolute top-20 right-3 h-32 w-44 bg-gray-900">
                                <ul className="pl-3 pt-2">
                                    <li><PersonIcon/><button>Min profil</button></li>
                                    <li><SettingsIcon/><button>Indstillinger</button></li>
                                    <li><DarkModeIcon/>Dark mode<switch/></li>
                                </ul>

                            </div> )
                        : null
                }

            </div>

        </div>


    )
}
