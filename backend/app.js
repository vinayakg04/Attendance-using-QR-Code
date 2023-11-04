const express=require("express")
const bodyParser = require('body-parser');
const app=express()
const cookieParser=require("cookie-parser")
// const cors = require('cors');

// app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000', 
//     methods: 'GET,PUT,POST,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   }));
  
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))



const adminRoutes = require('./routes/adminRoutes');
const studentRoutes=require("./routes/studentRoutes")
const attendanceRoutes= require('./routes/attendenceRoutes');




app.use('/admin', adminRoutes);
app.use('/student',studentRoutes)

app.use('/attendence', attendanceRoutes);



module.exports=app