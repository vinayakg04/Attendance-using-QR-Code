import React, { useState ,Fragment,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { register,clearErrors } from '../actions/studentAction';
import { useAlert } from "react-alert"; 
import Loader from '../layout/Loader';
import "./NewStudent.css"

const NewStudentForm = () => {
    const dispatch = useDispatch();
    const alert= useAlert();
    const {error,loading,isAuthenticated}=useSelector(state=>state.user)
    
    const [formData, setFormData] = useState({
        rollNo: '',
        email: '',
        password: '',
    });
   

    const { rollNo, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };     


    const handleSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();
    
        myForm.set("rollNo", rollNo);
        myForm.set("email", email);
        myForm.set("password", password);
      
    
        dispatch(register(myForm))

        setFormData({
            rollNo: '',
            email: '',
            password: '',
        });
    };
  
    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch(clearErrors);
        }
        if(isAuthenticated){
            alert.success("Student Created Successfully");
        }
    
      },[dispatch,error,alert,isAuthenticated])

    return (
        <Fragment>

        {
         loading ? <Loader/>:
 
         <Fragment>
           
         <form onSubmit={handleSubmit}  encType="multipart/form-data" className='register-form'>
         <h2>Create Student</h2>
            <input
                type="text"
                name="rollNo"
                value={rollNo}
                onChange={onChange}
                placeholder="Roll Number"
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email Address"
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
            />
            <button type="submit">create</button>
        </form>
         
        </Fragment>
              
        }
     </Fragment>
    );
};

export default NewStudentForm;
