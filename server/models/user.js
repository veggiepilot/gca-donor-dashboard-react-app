const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter a user first name"
    }, 
    lastName: {
        type: String,
        trim: true,
        required: "Enter a user last name"
    }, 
    email: {
        type: String,
        trim: true,
        required: "Enter a user email",
        unique: true,
        match: [/.+@'gcasda\.org'/, 'Must match a GCA email address!'],
    }, 
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

 const User = mongoose.model('User', userSchema);
 module.exports = User;