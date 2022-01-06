const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String, 
    patrentEmail: String,
    fundingNeeded: Number
});

module.exports = mongoose.model('Student', studentSchema);