import React from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../layout/Loader";

const ProtectedRoute = ({user,loading, isAuthenticated,children }) => {  
       if(loading){
        <Loader/>
       }
       if (!isAuthenticated || !user) {
        return < Navigate to="/" replace/>; 
      }
     
      return children;
           
};

export default ProtectedRoute;