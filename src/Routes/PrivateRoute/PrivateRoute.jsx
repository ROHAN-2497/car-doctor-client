import React, { useContext } from 'react';
import { AuthContext } from '../../components/Providers/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();

    if(users?.email){
        return children;
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;