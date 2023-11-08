const Admin = require('../models/Admin');
const sendToken = require('../utils/jwtTokenAdmin');



const adminController = {
  register: async (req, res) => {
    try {
      const { name, email, mobileNumber, password } = req.body;


      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }

      const newAdmin = new Admin({
        name,
        email,
        mobileNumber,
        password
      });

      await newAdmin.save();


      sendToken(newAdmin, 201, res)

    } catch (error) {
      console.error('Error in admin registration:', error);
      res.status(500).json({ message: 'Error in admin registration' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(404).json({ message: 'enter email or password' });
      }

      const admin = await Admin.findOne({ email }).select("+password");

      if (!admin) {
        return res.status(404).json({ message: 'Invalid email or password' });
      }


      const isPasswordMatched = await admin.comparePassword(password);

      if (!isPasswordMatched) {
        return res.status(404).json({ message: 'Invalid email or password' });
      }

      sendToken(admin, 200, res)
    } catch (error) {
      console.error('Error in admin login:', error);
      res.status(500).json({ message: 'Error in admin login' });
    }
  },

  logout: async (req, res) => {
    try {
      res.cookie("tokenAdmin", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })

      res.status(200).json({
        success: true,
        message: "Logged Out",
      })
    } catch (error) {
      console.error('Error in admin logout:', error);
      res.status(500).json({ message: 'Error in admin logout' });
    }
  },


  getAllAdmin: async (req, res) => {

    try {
      const Admins = await Admin.find();

      res.status(200).json({
        success: true,
        Admins,
      });
    } catch (error) {
      console.error('Error in Admins Access:', error);
      res.status(500).json({ message: 'Error in admins access' });
    }

  },

  getSingleAdmin: async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);

      if (!admin) {

        return res.status(404).json({ message: 'admin not found' });

      }

      res.status(200).json({
        success: true,
        admin,
      });
    } catch (error) {
      console.error('Error in Admin Access:', error);
      res.status(500).json({ message: 'Error in admin access' });
    }
  },

  deleteAdmin: async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);

      if (!admin) {
        return res.status(404).json({ message: 'admin not found' })
      }

      await admin.deleteOne()

      res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
      });

    } catch (error) {
      console.error('Error in Admin Deletation:', error);
      res.status(500).json({ message: 'Error in admin Deletion' });
    }
  },

};

module.exports = adminController;
