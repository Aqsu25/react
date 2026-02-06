import { children, createContext, useState } from "react";

export const adminAuthContext = createContext();

export const adminAuthProvider = ({ children }) => {
    const adminInfo = localStorage.getItem("adminInfo");
    const [user, setUser] = useState({ adminInfo })

    const login = (user) => {
        setUser(user)
    }
    const logout=()=>{
        localStorage.removeItem("adminInfo");
        setUser(null)
    }
    return <adminAuthContext.Provider value={{user,login,logout}}>
{children}
    </adminAuthContext.Provider>
}