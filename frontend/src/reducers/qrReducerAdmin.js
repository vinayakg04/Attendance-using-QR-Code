const initialState = {
    qrCodeData: '',
    error: null
  };
  
  const adminQRCodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_QR_CODE':
        return {
          ...state,
          qrCodeData: action.payload,
          error: null
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default adminQRCodeReducer;
  