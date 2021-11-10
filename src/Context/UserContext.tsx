import React, { createContext, useState } from 'react'
//@ts-ignore
import { authUser } from '../../../shiftplanserver/src/server'

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
