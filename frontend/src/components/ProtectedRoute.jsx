import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));
    useEffect(() => {}, []);

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
