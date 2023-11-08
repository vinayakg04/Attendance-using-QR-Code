const Student = require('../models/Student');
const sendToken = require('../utils/jwtTokenStudent');


const studentController = {
  register: async (req, res) => {
    try {
      const { rollNo, email, password } = req.body;


      const existingStudent = await Student.findOne({ email });
      if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists' });
      }

      const newstudent = new Student({
        email,
        rollNo,
        password
      });

      await newstudent.save();


      sendToken(newstudent, 201, res)



    } catch (error) {
      console.error('Error in Student registration:', error);
      res.status(500).json({ message: 'Error in student registration' });
    }
  },

  login: async (req, res) => {
    try {
      const { rollNo, password } = req.body;

      if (!password || !rollNo) {
        return res.status(404).json({ message: 'enter rollNo or password' });
      }

      const student = await Student.findOne({ rollNo }).select("+password");

      if (!student) {
        return res.status(404).json({ message: 'Invalid rollNo or password' });
      }


      const isPasswordMatched = await student.comparePassword(password);

      if (!isPasswordMatched) {
        return res.status(404).json({ message: 'Invalid rollNo or password' });
      }

      sendToken(student, 200, res)
    } catch (error) {
      console.error('Error in admin login:', error);
      res.status(500).json({ message: 'Error in admin login' });
    }
  },

  logout: async (req, res) => {
    try {
      res.cookie("tokenStudent", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })

      res.status(200).json({
        success: true,
        message: "Logged Out",
      })
    } catch (error) {
      console.error('Error in student logout:', error);
      res.status(500).json({ message: 'Error in student logout' });
    }
  },


  getAllStudent: async (req, res) => {

    try {
      const Students = await Student.find();

      res.status(200).json({
        success: true,
        Students,
      });
    } catch (error) {
      console.error('Error in Students Access:', error);
      res.status(500).json({ message: 'Error in Students access' });
    }

  },

  getSingleStudent: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);

      if (!student) {
        return res.status(404).json({ message: 'admin not found' });
      }

      res.status(200).json({
        success: true,
        student,
      });
    } catch (error) {
      console.error('Error in student Access:', error);
      res.status(500).json({ message: 'Error in student access' });
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);

      if (!student) {
        return res.status(404).json({ message: 'student not found' })
      }

      await student.deleteOne()

      res.status(200).json({
        success: true,
        message: "Student Deleted Successfully",
      });

    } catch (error) {
      console.error('Error in student Deletation:', error);
      res.status(500).json({ message: 'Error in student Deletion' });
    }
  },

};

module.exports = studentController;
