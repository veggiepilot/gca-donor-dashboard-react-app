const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter a student first name"
    }, 
    LastName: {
        type: String,
        trim: true,
        required: "Enter a student last name"
    }, 
    parentEmail: {
        type: String,
        trim: true,
        required: "Enter a parent email",
        unique: true
    },
    fundingNeeded: {
        type: Number
    }
});

const Student = mongoose.model('Student', studentSchema);

 module.exports = Student;