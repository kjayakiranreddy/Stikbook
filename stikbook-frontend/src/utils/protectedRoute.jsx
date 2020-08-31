import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {UserContext} from '../components/context/userContext';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    const {userEmail,setUserEmail} = useContext(UserContext);
   console.log(userEmail,"*******")
    return (
        <Route 
            {...rest}
            render={props => {
                if( userEmail == null) return <Redirect to="/login" />;
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
}

export default ProtectedRoute;