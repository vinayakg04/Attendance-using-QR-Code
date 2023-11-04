
import axios from "axios";

// Login
export const login = (rollNo, password) => async (dispatch) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' });
  
      const config = { headers: { "Content-Type": "application/json" } };
        
      const { data } = await axios.post(
        `/student/login`,
        { rollNo, password },
        config
      );
  
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.student });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
  };

  // Register
export const register = (myForm) => async (dispatch) => {
    try {
      dispatch({ type: 'REGISTER_USER_REQUEST' });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`/student/register`, myForm, config);
  
      dispatch({ type: 'REGISTER_USER_SUCCESS', payload: data.student });
    } catch (error) {
      dispatch({
        type: 'REGISTER_USER_FAIL',
        payload: error.response.data.message,
      });
    }
  };
  

  // clear errors
  export const clearErrors=()=>async(dispatch)=>{

    dispatch({type:'CLEAR_ERRORS'})
 
 }


 // Logout student
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/student/logout`);

    dispatch({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'LOGOUT_FAIL', payload: error.response.data.message });
  }
};

 

// get All students
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: 'ALL_USERS_REQUEST' });
    const { data } = await axios.get(`/student/getAllStudents`);

    dispatch({ type: 'ALL_USERS_SUCCESS', payload: data.Students});
  } catch (error) {
    dispatch({ type: 'ALL_USERS_FAIL', payload: error.response.data.message });
  }
};

// get student Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_DETAILS_REQUEST' });
    const { data } = await axios.get(`/student/getSingleStudent/${id}`);

    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data.student });
  } catch (error) {
    dispatch({ type: 'USER_DETAILS_FAIL', payload: error.response.data.message });
  }
};

// Delete student
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_USER_REQUEST' });

    const { data } = await axios.delete(`/student/deleteStudent/${id}`);

    dispatch({ type: 'DELETE_USER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'DELETE_USER_FAIL',
      payload: error.response.data.message,
    });
  }
};


