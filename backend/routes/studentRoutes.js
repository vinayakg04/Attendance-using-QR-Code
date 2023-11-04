const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { isAuthenticatedAdmin } = require('../middleware/auth');



/// student route
router.route("/register").post(isAuthenticatedAdmin,studentController.register);
router.route("/login").post(studentController.login);
router.route("/logout").get(studentController.logout);
router.route("/getAllStudents").get(isAuthenticatedAdmin,studentController.getAllStudent);
router.route("/getSingleStudent/:id").get(isAuthenticatedAdmin,studentController.getSingleStudent);
router.route("/deleteStudent/:id").delete(isAuthenticatedAdmin,studentController.deleteStudent);

module.exports = router;
