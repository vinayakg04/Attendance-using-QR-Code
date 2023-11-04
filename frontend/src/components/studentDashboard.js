
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/studentAction';
import { Navigate } from "react-router-dom";

import StudentAttendanceScanner from './QRScanner';


const StudentDashboard = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        < Navigate to="/" replace />
    }

    return (
        <div >
            <div >
                <h1 style={{ color: 'black', top: "20px", left: "90px", position: "absolute" }}>SCAN THE QR CODE TO MARK THE ATTENDANCE</h1>
                <button
                    style={{
                        position: 'absolute',
                        width: "8%",
                        top: '30px',
                        right: '120px',
                        padding: "3px"
                    }}
                    onClick={handleLogout}><h2>Logout</h2></button>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "300px" }}>

                <StudentAttendanceScanner />
            </div>
        </div>
    )
};

export default StudentDashboard;