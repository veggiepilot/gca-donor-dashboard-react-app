const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const donorSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter a donor first name"
    }, 
    lastName: {
        type: String,
        trim: true,
        required: "Enter a donor last name"
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
    email: {
        type: String,
        required: "Email is required",
        unique: true,
    },
    phone: {
        type: String,
        required: "Phone number is required"
    },
    donation: [
        {
            studentId: {
                type: Schema.Types.ObjectId,
            },
            amount: {
                type: Number,
                trim: true,
                required: true
            },
            date: {
                type: Date,
                default: Date.now,
                required: true,
                get: (timestamp) => dateFormat(timestamp)
            }
        }
    ]
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;