import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {

    const authToken = localStorage.getItem("Tokenobject");

    return authToken ? <Outlet /> : <Navigate to="/login" />;
}
