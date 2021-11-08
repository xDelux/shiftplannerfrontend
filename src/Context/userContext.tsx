import React, { createContext, useContext, useState } from 'react';

// export const userContext = createContext({})

export type authedUser = {
   id: string
   role: string
   setId: (id: string) => void;
   setRole: (role: string) => void;
}

const defaultTemp: authedUser = {
   id: "",
   role: "",
   setId: () => {},
   setRole: () => {}
}


export const userContext = createContext<authedUser>(defaultTemp)

export const userContextHook = () => {
   useContext(userContext)
}

// export const userContextProvider = ({children}) => {
   
//    const [user, setUser] = useState<authedUser>()
   
//    const value = React.useMemo(() => {
//       return { user, setUser};
//     }, [user]);
    
//    return (
//       <userContext.Provider value={value} >
//          {children}
//       </userContext.Provider>
//    )
// }



