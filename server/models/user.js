const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

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

userSchema.pre(save, next => {
    const user = this;

    //Hash the password if it has been modified (or is new)
    if(!user.isModified('password')) return next();

    // Generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        //Hash passowrd using new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            //Override cleartext password with hashed password
            user.password = hash;
            next();
        });

    });
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

 const User = mongoose.model('User', userSchema);
 module.exports = User;