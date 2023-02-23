import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { authContext } from './ContextProvider';

export default function ProtectedRoute({ children }) {
    const { user } = useContext(authContext);

    if (user) {
        return children
    } else {
        return <Navigate to='/login' />
    }
}

