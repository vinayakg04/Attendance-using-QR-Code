const Attendance = require('../models/Attendence');


const attendenceController={
    getAllStudentAttendance: async (req, res) => {
        try {
            const allAttendance = await Attendance.find();
            return res.status(200).json(allAttendance);
        } catch (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    markAttendance:async (req, res) => {
        try {
            const { studentId } = req.body;
            const attendance = new Attendance({ student: studentId });
            await attendance.save();
    
            return res.status(200).json({ message: 'Attendance marked successfully' });
        } catch (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
}

}

module.exports = attendenceController

