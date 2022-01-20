import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedLogin =()=>{
    return localStorage.getItem("auth") ? <Navigate to="/home"/> :<Outlet/>;
}

export default ProtectedLogin;