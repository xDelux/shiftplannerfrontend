import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BadgeIcon from '@mui/icons-material/Badge'
import GroupIcon from '@mui/icons-material/Group'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory()
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className="flex flex-col w-64 bg-primary text-white text-lg select-none">
            <ul className="flex flex-col flex-fill px-2 gap-1 inline-block align-top">
            <button onClick={() => history.push(`/`)}>
                <li className="flex hover:bg-secondary rounded-sm px-5 py-4 ">
                    <div className="flex flex-row"><HomeIcon/> <p className="pl-3">Hjem</p> </div>
                </li>
            </button>
            <button onClick={() => history.push(`/calendar`)}>
                <li className="flex hover:bg-secondary rounded-sm px-5 py-4">
                    <div className="flex flex-row"><AssignmentIcon/> <p className="pl-3">Vagtplan</p> </div>
                </li>
            </button>
            <button onClick={() => history.push(`/login`)}>
                <li className="flex hover:bg-secondary rounded-sm px-5 py-4">
                    <div className="flex flex-row"><BadgeIcon/> <p className="pl-3">Mine vagter</p> </div>
                </li>
            </button>
                <li className="flex hover:bg-secondary rounded-sm px-5 py-4">
                    <button>
                        <div className="flex flex-row"><GroupIcon/> <p className="pl-3">Medarbejere</p> </div>
                    </button>
                </li>
            </ul>
            <div className="flex flex-grow"></div>

        </div>
    )
}
