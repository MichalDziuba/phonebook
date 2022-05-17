import React from "react";
import { useSelector } from "react-redux";


import { Navigate, Outlet, } from "react-router-dom";
export const PrivateRoute = () => {
    const token =  useSelector(state => state.phonebook.userData.token);
    
    return !token ? <Navigate to="/" replace /> : <Outlet />;
    // return token ? <Outlet /> : <Navigate to= '/' replace />
}