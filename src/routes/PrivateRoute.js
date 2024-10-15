import { Navigate } from "react-router-dom";
import {useState} from 'react';

const PrivateRoute = ({ Component }) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);

 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;