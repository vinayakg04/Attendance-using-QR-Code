import axios from "axios";

// Login admin
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST_ADMIN' });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/admin/login`,
        { email, password },
        config
      );
  
      dispatch({ type: 'LOGIN_SUCCESS_ADMIN', payload: data.admin });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL_ADMIN', payload: error.response.data.message });
    }
  };


 // Logout Admin
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/admin/logout`);

    dispatch({ type: 'LOGOUT_SUCCESS_ADMIN' });
  } catch (error) {
    dispatch({ type: 'LOGOUT_FAIL_ADMIN', payload: error.response.data.message });
  }
};

export const clearErrors=()=>async(dispatch)=>{

  dispatch({type:'CLEAR_ERRORS'})

}

