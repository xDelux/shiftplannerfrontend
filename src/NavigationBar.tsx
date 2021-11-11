import AssignmentIcon from '@mui/icons-material/Assignment'
import BadgeIcon from '@mui/icons-material/Badge'
import PageView from '@mui/icons-material/Delete'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './Context/UserContext'

export const NavigationBar = props => {
    const { user } = useContext(UserContext)
    let [collapsed, setCollapsed] = useState(false)
    const history = useHistory()
    const titles = ['Hjem', 'Vagtplan', 'Dine vagter', 'Medarbejdere']

    const IconHeader = title => {
        ;<p className="pl-3">{title}</p>
    }

    function handleCollapse() {
        setCollapsed(!collapsed)
    }

    if (!props.collapsed) {
        return (
            <div className="flex flex-col w-64 bg-lightPrimary dark:bg-primary text-white text-lg select-none transition duration-500 ease-in-out">
                <ul className="flex flex-col flex-fill px-2 gap-1 inline-block align-top pt-2">
                    <button onClick={() => history.push(`/`)}>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4 ">
                            <div className="flex flex-row">
                                <HomeIcon /> <p className="pl-3">Hjem</p>{' '}
                            </div>
                        </li>
                    </button>
                    <button onClick={() => history.push(`/calendar`)}>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                            <div className="flex flex-row">
                                <AssignmentIcon /> <p className="pl-3">Vagtplan</p>{' '}
                            </div>
                        </li>
                    </button>
                    <button onClick={() => history.push(`/login`)}>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                            <div className="flex flex-row">
                                <BadgeIcon /> <p className="pl-3">Mine vagter</p>{' '}
                            </div>
                        </li>
                    </button>
                    <button>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                            <button onClick={() => history.push(`/employees`)}>
                                <div className="flex flex-row">
                                    <GroupIcon /> <p className="pl-3">Medarbejere</p>{' '}
                                </div>
                            </button>
                        </li>
                    </button>
                    {user.role && (
                        <button>
                            <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                                <button onClick={() => history.push(`/employees`)}>
                                    <div className="flex flex-row">
                                        <PageView /> <p className="pl-3">Testing</p>{' '}
                                    </div>
                                </button>
                            </li>
                        </button>
                    )}

                    {user.role && (
                        <button>
                            <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                                <button onClick={() => history.push(`/employees`)}>
                                    <div className="flex flex-row">
                                        <PageView /> <p className="pl-3">Testing</p>{' '}
                                    </div>
                                </button>
                            </li>
                        </button>
                    )}
                </ul>
                <div className="flex flex-grow"></div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col w-26 bg-lightPrimary dark:bg-primary text-white text-lg select-none transition duration-500 ease-in-out">
                <ul className="flex flex-col flex-fill px-2 gap-1 inline-block align-top pt-2">
                    <button onClick={() => history.push(`/`)}>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4 ">
                            <div className="flex flex-row">
                                <HomeIcon />
                            </div>
                        </li>
                    </button>
                    <button onClick={() => history.push(`/calendar`)}>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                            <div className="flex flex-row">
                                <AssignmentIcon />{' '}
                            </div>
                        </li>
                    </button>
                    <button onClick={() => history.push(`/login`)}>
                        <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                            <div className="flex flex-row">
                                <BadgeIcon />{' '}
                            </div>
                        </li>
                    </button>
                    <li className="flex h-16 hover:bg-lightSecondary dark:hover:bg-secondary rounded-sm px-5 py-4">
                        <button>
                            <div className="flex flex-row">
                                <GroupIcon />
                            </div>
                        </button>
                    </li>
                </ul>
                <div className="flex flex-grow"></div>
            </div>
        )
    }
}
