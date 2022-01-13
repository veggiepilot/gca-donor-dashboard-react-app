const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter a student first name"
    }, 
    lastName: {
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
    address1: {
        type: String,
        trim: true,
        required: "Enter an address" 
    },
    address2: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true,
        required: "Enter a city"
    }, 
    state: {
        type: String,
        required: "Please choose a state"
    }, 
    zip: {
        type: Number,
        trim: true,
        required: "Please enter a zipcode"
    },
    fundingNeeded: {
        type: Number
    }, 
    donors: [
        {
           donorId: {
               type: String
           } 
        }
    ]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;