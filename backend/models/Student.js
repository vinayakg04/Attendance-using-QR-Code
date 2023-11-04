const mongoose = require('mongoose');
const validator=require("validator")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const studentSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: [true,"please enter your roll no.!"],
    unique: true
  },
  email: {
    type:String,
    required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  attendance: [
    {
      date: {
        type: Date,
        default: Date.now
      },
      isPresent: {
        type: Boolean,
        default: false
      }
    }
  ],

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});



studentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  
  
    // JWT TOKEN
    studentSchema.methods.getJWTToken = function () {
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });
    }
    
    // compare password 
    studentSchema.methods.comparePassword = async function (password) {
      return await bcrypt.compare(password, this.password);
    };
      
  
  
  
  
  

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
