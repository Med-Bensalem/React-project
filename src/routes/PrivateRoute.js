import { Navigate } from "react-router-dom";
import {useState} from 'react';
import { useSelector } from "react-redux";

const PrivateRoute = ({ Component }) => {

  const isAuthenticated = useSelector((state) => state.user.token);
 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;