import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'qrcode.react';
import { fetchQRCode } from '../actions/qrActionAdmin';



const AdminQRCodeDisplay = () => {
  const dispatch = useDispatch();
  const {qrCodeData,error} = useSelector(state => state.qrcode);
  

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchQRCode());
    }, 60000); // Fetch QR code every minute

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
   <>
      
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh',position:"absolute",bottom:"10%",left:"30%" }}>
    <h1>Scan QR Code For Attendence</h1>
    <div style={{ width: '200px', height: '200px',margin:"40px", }}>
      <QRCode value={qrCodeData} style={{ width: '200px', height: '200px' }}/>
    </div>
  </div>
  </>
  
  );
};

export default AdminQRCodeDisplay;
