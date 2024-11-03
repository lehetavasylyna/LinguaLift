import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuthContext();
    // const { isAuthenticated, initializedAuthStatus } = useAuthContext();
    // useEffect(() => {
    //     initializedAuthStatus();
    // }, []);

    console.log(isAuthenticated);

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
