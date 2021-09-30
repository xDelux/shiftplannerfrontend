import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BadgeIcon from '@mui/icons-material/Badge'
import GroupIcon from '@mui/icons-material/Group'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="flex flex-col w-64 bg-primary text-white px-6 text-lg pt-5 gap-y-5">
            <ul className="flex flex-col gap-y-10 items-start justify-items-center ">
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm ">
                    <button onClick={() => history.push(`/`)}>
                        <HomeIcon /> Hjem
                    </button>
                </li>
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm">
                    <button onClick={() => history.push(`/calendar`)}>
                        <AssignmentIcon /> Mine vagter
                    </button>
                </li>
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm">
                    <button onClick={() => history.push(`/login`)}>
                        <BadgeIcon /> LoginSjov
                    </button>
                </li>
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm">
                    <button>
                        <GroupIcon /> Medarbejdere
                    </button>
                </li>
            </ul>
            <div className="flex flex-grow"></div>
            <ul className="my-7 text-center">
                <li>Indstillinger</li>
                <li>Log ud</li>
            </ul>
        </div>
    )
}
