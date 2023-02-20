import React, { createContext, useState } from 'react'


export const authContext = createContext();

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState("");


    return (
        < >

            <authContext.Provider value={{ user, setUser }}>
                {children}
            </authContext.Provider>
        </>
    )
}

export default ContextProvider