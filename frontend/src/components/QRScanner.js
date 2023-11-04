import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {QrReader} from 'react-qr-reader';

import { attendanceMarkedSuccess,markAttendance } from '../actions/qrActionStudent';

const StudentAttendanceScanner = () => {
  const dispatch = useDispatch();
  const {scannedData,error} = useSelector(state => state.qrScanner);
  

  const handleScan = (data) => {
    if (data) {
      dispatch(attendanceMarkedSuccess(data)); // Store scanned data in Redux state
      dispatch(markAttendance(data)); // Dispatch action to mark attendance
    }
  };

  const handleError = (err) => {
    // console.error(err);
    // Handle errors during QR scanning
  };

  return (
    <div style={{ position:"absolute", width: '20%', height: '40%',top:"300px" }}>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
       
      />
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
};

export default StudentAttendanceScanner;
