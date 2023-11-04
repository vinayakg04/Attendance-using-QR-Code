
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/adminAction';
import { Navigate } from "react-router-dom";
import NewStudentForm from '../admin/NewStudent';
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    const dispatch = useDispatch();
   
    const handleLogout = () => {
        dispatch(logout());
        < Navigate to="/" replace/> 
    }
    
    const buttonStyle = {
        position: 'absolute',
        bottom: '300px',
        width:'20%',
        left: '30px',
        padding: '15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',

    };
    const buttonStyles = {
        position: 'absolute',
        bottom: '200px',
        width:'20%',
        left: '30px',
        padding: '15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',

    };
    return(
        <div>
        <h1 style={{color:'black',top:"20px",left:"90px",position:"absolute"}}>Welcom To Admin-Dashboard Page.....</h1>
        <button 
            style={{
             position: 'absolute',
             width:"8%",
             top: '30px', 
            right: '120px', 
            padding:"3px"
               }}
        onClick={handleLogout}><h2>Logout</h2></button>

        <NewStudentForm/>

        <Link to="/all-students">
                <button style={buttonStyle}>View All Students</button>
            </Link>

            <Link to="/admin/qrcode">
                <button style={buttonStyles}>Visit QR code page</button>
            </Link>
     </div>
    )
};

export default AdminDashboard;


