import React from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../layout/Loader";

const AdminProtected = ({adminuser,adminloading, adminisAuthenticated,children }) => {  
 if(adminloading){
     <Loader/>
 }
       if (!adminisAuthenticated || !adminuser) {
        return < Navigate to="/" replace/>; 
      }
     
      return children;
    
           
};

export default AdminProtected;