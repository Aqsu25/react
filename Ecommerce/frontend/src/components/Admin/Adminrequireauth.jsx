import { useContext } from "react"
import { adminAuthContext } from "../context/AdminAuth"
import { Navigate } from "react-router";

export const Adminrequireauth=({children})=>{
    const {user}=useContext(adminAuthContext);
    if(!user){
        return <Navigate to='/admin/login'/>
    }
    return children;
}