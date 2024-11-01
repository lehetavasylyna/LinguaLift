import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { isRegistered } = useAuthContext();

    return <Route {...rest} element={isRegistered ? element : <Navigate to="/login" replace />} />;
};

export default PrivateRoute;
