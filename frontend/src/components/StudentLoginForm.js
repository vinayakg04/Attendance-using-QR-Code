
import React, { Fragment,useState ,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login,clearErrors } from '../actions/studentAction';
import "./studentLogin.css"
import Loader from "../layout/Loader"
import {useAlert} from "react-alert"
 import { useNavigate,useLocation} from "react-router-dom";

const StudentLoginForm = () => {
  const dispatch = useDispatch();
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const {error,loading,isAuthenticated}=useSelector(state=>state.user)
   const navigate = useNavigate ();
const alert=useAlert()
 const location=useLocation()

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(rollNo, password));
  };


   const redirect = location.search ? location.search.split("=")[1] : "/student/dashboard";

  useEffect(()=>{
    if(error){
        alert.error(error)
        dispatch(clearErrors);
    }
    if(isAuthenticated){
      alert.success("Student Login Successfully");
      navigate(redirect)
  }
  

  },[dispatch,error,isAuthenticated,alert,navigate,redirect])

  return (
    <Fragment>
    {
      loading ? <Loader/>:  <Fragment>
    <div className="login-form">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin} >
        <div className="form-group">
          <label>Roll Number</label>
          <input
            type="text/plain"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </Fragment>
     }
       </Fragment>
  );
};

export default StudentLoginForm;
