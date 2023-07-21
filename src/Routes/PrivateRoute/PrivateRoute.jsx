import React, { useContext } from 'react';
import { AuthContext } from '../../components/Providers/authProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    if(users?.email){
        return children;
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;