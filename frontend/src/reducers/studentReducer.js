export const userReducer = (state = { user: {} }, action) => {
  switch(action.type){

      case 'LOGIN_REQUEST':
      case  'REGISTER_USER_REQUEST':
          return {
              loading: true,
              isAuthenticated: false,
            };

    case 'LOGIN_SUCCESS':
   case 'REGISTER_USER_SUCCESS':
      return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };

 
  case 'LOGOUT_SUCCESS':
    return {
      loading: false,
      user: null,
      isAuthenticated: false,
    };

     case 'LOGIN_FAIL':
      case 'REGISTER_USER_FAIL':
          return {
              ...state,
              loading: false,
              isAuthenticated: false,
              user: null,
              error: action.payload,
            };


      case 'LOGOUT_FAIL':
        return {
          ...state,
          loading: false,
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




export const profileReducer = (state = {}, action) => {
  switch (action.type) {

          case 'DELETE_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };


      case 'DELETE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          isDeleted: action.payload.success,
          message: action.payload.message,
        };


    
    case 'DELETE_USER_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


      case 'DELETE_USER_RESET':
        return {
          ...state,
          isDeleted: false,
        };

        
    case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case 'USER_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case 'USER_DETAILS_FAIL':
      return {
        ...state,
        loading: false,
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
};


export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'ALL_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ALL_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case 'ALL_USERS_FAIL':
      return {
        ...state,
        loading: false,
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
};
