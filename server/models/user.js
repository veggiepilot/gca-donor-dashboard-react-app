const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter a user first name"
    }, 
    LastName: {
        type: String,
        trim: true,
        required: "Enter a user last name"
    }, 
    email: {
        type: String,
        trim: true,
        required: "Enter a user email",
        unique: true
    }
});

 const User = mongoose.model('User', userSchema);

 module.exports = User;