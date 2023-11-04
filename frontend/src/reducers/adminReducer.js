export const adminReducer = (state = { adminuser: {} }, action) => {
    switch(action.type){
  
        case 'LOGIN_REQUEST_ADMIN':
            return {
                adminloading: true,
                adminisAuthenticated: false,
              };
  
      case 'LOGIN_SUCCESS_ADMIN':
        return {
            ...state,
            adminloading: false,
            adminisAuthenticated: true,
            adminuser: action.payload,
          };
  
   
    case 'LOGOUT_SUCCESS_ADMIN':
      return {
        adminloading: false,
        adminuser: null,
        adminisAuthenticated: false,
      };
  
       case 'LOGIN_FAIL_ADMIN':
            return {
                ...state,
                adminloading: false,
                adminisAuthenticated: false,
                adminuser: null,
                error: action.payload,
              };
  
  
        case 'LOGOUT_FAIL_ADMIN':
          return {
            ...state,
            adminloading: false,
            error: action.payload,
          };
  
  case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null,
      };
  
    default:
      return state;
    }
  
  
  }
  
  