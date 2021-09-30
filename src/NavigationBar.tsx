import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BadgeIcon from '@mui/icons-material/Badge'
import GroupIcon from '@mui/icons-material/Group'

export const NavigationBar = () => {
    return (
        <div className="flex flex-col w-64 bg-primary text-white px-6 text-lg pt-5 gap-y-5">
            <ul className="flex flex-col gap-y-10 items-start justify-items-center ">
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm ">
                    <HomeIcon  /> Hjem
                </li>
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm">
                    <AssignmentIcon /> Mine vagter
                </li>
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm">
                    <BadgeIcon /> Vagtplan
                </li>
                <li className="px-2 w-40 h-8 hover:bg-secondary rounded-sm">
                    <GroupIcon /> Medarbejdere
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
