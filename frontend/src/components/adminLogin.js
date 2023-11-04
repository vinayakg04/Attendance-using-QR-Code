import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../actions/adminAction';
import "./adminLogin.css"
import Loader from "../layout/Loader"
import { useAlert } from "react-alert"
import { useNavigate, useLocation } from "react-router-dom";

const AdminLogin = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error,adminloading,adminisAuthenticated}=useSelector(state=>state.admin)
   const navigate = useNavigate ();
const alert=useAlert()
 const location=useLocation()

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };


   const redirect = location.search ? location.search.split("=")[1] : "/admin/dashboard";

  useEffect(()=>{
    if(error){
        alert.error(error)
        dispatch(clearErrors);
    }
    if(adminisAuthenticated){
        alert.success("Admin Login Successfully");
      navigate(redirect)

  }

  },[dispatch,error,adminisAuthenticated,alert,navigate,redirect])
    return (
        <Fragment>
            {
                adminloading ? <Loader /> : <Fragment>
                    <div className="admin-login-form"> {/* Updated class name */}
                        <h2>Admin Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Email-Id</label>
                                <input
                                    type="text/plain"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

export default AdminLogin;
