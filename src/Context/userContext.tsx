import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState({
        id: 'Hej',
        role: 'Jan',
    })
    const setUserData = (id: string, role: string) => {
        setUser({ id, role })
    }

    return <UserContext.Provider value={{ user, setUserData }}>{props.children}</UserContext.Provider>
}

export default UserContextProvider
