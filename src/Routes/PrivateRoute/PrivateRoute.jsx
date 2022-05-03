import React from "react";
import { useSelector } from "react-redux";
//import token

import { Navigate, Outlet, } from "react-router-dom";
export const PrivateRoute = () => {
    const token =  useSelector(state => state.phonebook.userData.token);
    console.log(token)
    // const token = true;
    return  !token ? <Navigate to="/" replace /> : <Outlet />;
}