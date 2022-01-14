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
        // match: [/.+@'gcasda\.org'/, 'Must match a GCA email address!'],
    }, 
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

 const User = mongoose.model('User', userSchema);
 module.exports = User;