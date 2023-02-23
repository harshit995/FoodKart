import React, { useContext } from 'react'
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import { authContext } from './ContextProvider';

export default function PublicRoute({ children }) {
    const { user } = useContext(authContext);
    // const navigate = useNavigate();
    if (user) {
        return <Navigate to='/'></Navigate>
    } else {
        return <Outlet />
    }
}
