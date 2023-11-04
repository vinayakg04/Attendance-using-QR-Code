const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Student=require("../models/Student")

exports.isAuthenticatedAdmin= async (req, res, next) => {

    try{
        const  {tokenAdmin}  = req.cookies;
    
        if (!tokenAdmin) {
            return res.status(401).json({ message: 'Please admin login to access the resources' });
          }
      
          const decodedData = jwt.verify(tokenAdmin, process.env.JWT_SECRET);
    
          req.admin = await Admin.findById(decodedData.id);

          next();
    }  catch(error){
        console.error('Error in authentication', error);
        res.status(500).json({ message: 'Error in admin authentication' });
    }
    
  };


 
exports.isAuthenticatedStudent= async (req, res, next) => {

    try{
        const  {tokenStudent}  = req.cookies;
    
        if (!tokenStudent) {
            return res.status(401).json({ message: 'Please student login to access the resources' });
          }
      
          const decodedData = jwt.verify(tokenStudent, process.env.JWT_SECRET);
    
          req.student = await Student.findById(decodedData.id);

          next();
    }  catch(error){
        console.error('Error in authentication', error);
        res.status(500).json({ message: 'Error in admin authentication' });
    }
    
  };
