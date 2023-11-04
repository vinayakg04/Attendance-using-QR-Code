const initialState = {
    scannedData: '',
    successResponse: null,
    error: null
  };
  
  const studentAttendanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SCANNED_DATA':
        return {
          ...state,
          scannedData: action.payload,
          successResponse: null,
          error: null
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'ATTENDANCE_MARKED_SUCCESS':
        return {
          ...state,
          successResponse: action.payload
        };
      default:
        return state;
    }
  };
  
  export default studentAttendanceReducer;
  