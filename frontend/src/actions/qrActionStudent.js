import axios from 'axios';

export const markAttendance = (scannedData) => {
  return async dispatch => {
    try {

      const response = await axios.post('/attendence/mark-attendence', { scannedData });
      dispatch({ type: 'ATTENDANCE_MARKED_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to mark attendance' });
    }
  };
};

// Add an additional action for handling the success response
export const attendanceMarkedSuccess = (data) => {
  return { type: 'ATTENDANCE_MARKED_SUCCESS', payload: data };
};
