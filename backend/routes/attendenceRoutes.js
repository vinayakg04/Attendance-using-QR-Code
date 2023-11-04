const express = require('express');
const router = express.Router();

const attendenceController=require("../controllers/attendenceController")


router.route('/mark-attendance').post(attendenceController.markAttendance);
router.route('/all-student-attendance').get(attendenceController.getAllStudentAttendance);


module.exports = router;
