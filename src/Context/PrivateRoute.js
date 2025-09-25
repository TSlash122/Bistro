import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Adjust the import path as needed

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Assuming `isAuthenticated` is from your AuthContext
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
