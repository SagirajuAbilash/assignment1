import React from "react";
import { Navigate } from "react-router-dom";
import { UserUserAuth } from "../context/UserAuthContext";

const ProtectedRoute =({children})=>{

    let {user} = UserUserAuth();
    if(!user){
           return(
            <Navigate to="/login"/>
           );
    }
    return (
       children
    );
}

export default ProtectedRoute;