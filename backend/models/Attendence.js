const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});


const Attendance= mongoose.model('Attendance', attendanceSchema );

module.exports = Attendance
