import React, { createContext, useState } from 'react'
import { authUser } from '../../../shiftplanserver/src/Types'

export const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState<authUser>({
        id: 'Hej',
        role: true,
    })
    const setUserData = (id: string, role: boolean) => {
        setUser({ id, role })
    }

    return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
}

export default UserContextProvider
