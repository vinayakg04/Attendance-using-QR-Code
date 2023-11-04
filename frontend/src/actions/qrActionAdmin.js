import axios from 'axios';

export const fetchQRCode = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/attendence/all-student-attendance');
      dispatch({ type: 'SET_QR_CODE', payload: response.data.qrCodeData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch QR code' });
    }
  };
};
