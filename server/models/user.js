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
        unique: true
    }, 
    password: {
        type: String,
        required: "Enter a password"
    }
});

 const User = mongoose.model('User', userSchema);
 module.exports = User;