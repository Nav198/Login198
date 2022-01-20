import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    return localStorage.getItem("auth") ? <Outlet/> : <Navigate to="/"/>;
    
}
